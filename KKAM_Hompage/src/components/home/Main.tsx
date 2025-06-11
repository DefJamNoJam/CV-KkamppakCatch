import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer, Top, Tilte, Bottom, Button } from "@styles/home/MainStyles";
import { UseLanguage } from "@hooks/UseLanguage";
import { MainData } from "@constants/MainData";

export default function Main() {
  const { lang } = UseLanguage();
  const m = useMemo(() => MainData.translations[lang], [lang]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new');
  };

  return (
    <MainContainer>
      <Top>{m.top}</Top>
      <Tilte>{m.title}</Tilte>
      <Bottom>{m.bottom}</Bottom>
      <Button onClick={handleClick}>{m.button}</Button>
    </MainContainer>
  );
}