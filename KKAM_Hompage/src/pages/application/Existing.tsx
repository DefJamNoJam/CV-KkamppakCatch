import React, { useEffect, useState, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import * as AS from "@styles/application/AuthStyles";
import PasswordInput from "@components/common/Password";
import { AppSection, Wrapper } from "@styles/HomeStyles";
import { supabase } from "@services/supabaseClient";
import { usePopup } from "@hooks/UsePopup";
import { Container } from "@styles/admin/AdminStyles";
import { ExistingData } from "@constants/ExistingData";
import { UseLanguage } from "@hooks/UseLanguage";

export default function Login() {
  const navigate = useNavigate();
  const { lang } = UseLanguage();
  const m = useMemo(() => ExistingData.translations[lang], [lang]);

  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { showAlert } = usePopup();

  useEffect(() => {
    (async () => {
      const uid = localStorage.getItem("uid");
      if (uid) {
        const { data, error: err } = await supabase
          .from("user")
          .select("uid")
          .eq("uid", uid)
          .eq("use_yn", true)
          .single();

        if (data && !err) {
          setAuthenticated(true);
        } else {
          localStorage.removeItem("uid");
        }
      }
      setChecking(false);
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: supaError } = await supabase
        .from("user")
        .select("uid, use_yn")
        .eq("email", email)
        .eq("password", password)
        .single();

      if (supaError || !data) {
        throw new Error(m.invalidCredentials);
      }

      if (!data.use_yn) {
        await showAlert({ message: m.unapprovedAccount });
        return;
      }
      localStorage.setItem("uid", data.uid);

      setAuthenticated(true);
      navigate("/existing/dashboard", { replace: true });
    } catch (err) {
      const message = err instanceof Error ? err.message : m.genericError;
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return <Container>{m.loading}</Container>;
  }
  if (!authenticated) {
    return (
      <Wrapper>
        <AppSection>
          <AS.AuthContainer>
            <h2>{m.existingCustomer}</h2>
            <AS.Form onSubmit={handleSubmit}>
              <AS.InputWrapper>
                <AS.IconWrapper>
                  <FaEnvelope />
                </AS.IconWrapper>
                <AS.Input
                  type="email"
                  placeholder={m.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </AS.InputWrapper>

              <PasswordInput
                password={password}
                setPassword={setPassword}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                placeholder={m.passwordPlaceholder}
              />

              <AS.Button type="submit" disabled={loading}>
                {loading ? m.loading : m.loginButton}
              </AS.Button>
              {error && <AS.ErrorMessage>{error}</AS.ErrorMessage>}
            </AS.Form>
          </AS.AuthContainer>
        </AppSection>
      </Wrapper>
    );
  }
  return <Outlet />;
}