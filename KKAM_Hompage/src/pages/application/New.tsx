import { useState } from "react";
import * as AS from "@styles/application/AuthStyles";
import { AppSection, Wrapper } from "@styles/HomeStyles";
import { UseLanguage } from "@hooks/UseLanguage";
import { AuthData } from "@constants/AuthData";
import UserInfo, { UserData } from "@components/application/UserInfo";
import { StoreInfo } from "@components/application/StoreInfo";
import { registerUserAndStores } from "@services/api";
import { useNavigate } from "react-router-dom";
import { usePopup } from "@hooks/UsePopup";

export default function New() {
  const { lang } = UseLanguage();
  const navigate = useNavigate();
  const { showAlert } = usePopup();
  const translations = AuthData.translations[lang];
  const {
    title,
    namePlaceholder,
    emailPlaceholder,
    phonePlaceholder,
    passwordPlaceholder,
    confirmPasswordPlaceholder,
    submitButton,
    messages,
    store: storeTranslations
  } = translations;

  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    password: ""
  });
  
  const [stores, setStores] = useState([{ name: "", address: "", order: "" }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userData.name || !userData.email || !userData.password || !userData.phone) {
      setError(messages.userRequired);
      return;
    }

    const validStores = stores.filter(store => store.name && store.address);
    if (validStores.length === 0) {
      setError(messages.storeRequired);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const result = await registerUserAndStores(userData, validStores);
      console.log("등록 성공:", result);
      await showAlert({ message: messages.success });
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        showAlert({ message: messages.failure });
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <AppSection>
        <AS.AuthContainer>
          <h2>{title}</h2>
          <AS.Form onSubmit={handleSubmit}>
            <UserInfo
              namePlaceholder={namePlaceholder}
              emailPlaceholder={emailPlaceholder}
              phonePlaceholder={phonePlaceholder}
              passwordPlaceholder={passwordPlaceholder}
              confirmPasswordPlaceholder={confirmPasswordPlaceholder}
              onUserDataChange={setUserData}
            />

            <h3>{storeTranslations.title}</h3>
            <StoreInfo
              lang={lang}
              stores={stores}
              setStores={setStores}
            />
            
            {error && <AS.ErrorMessage>{error}</AS.ErrorMessage>}
            
            <AS.Button type="submit" disabled={loading}>
              {loading ? messages.loading : submitButton}
            </AS.Button>
          </AS.Form>
        </AS.AuthContainer>
      </AppSection>
    </Wrapper>
  );
}