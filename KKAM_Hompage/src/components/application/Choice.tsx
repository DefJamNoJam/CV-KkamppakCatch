import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as CS from "@styles/application/ChoiceStyles";
import { UseLanguage } from "@hooks/UseLanguage";
import { ChoiceData } from "@constants/ChoiceData";

export default function Choice() {
  const navigate = useNavigate();
  const { lang } = UseLanguage();
  const { title, newCustomer, existingCustomer } = useMemo(
    () => ChoiceData.translations[lang],
    [lang]
  );

  const handleNavigate = (path: string) => () => {
    navigate(path);
  };

  return (
    <CS.ChoiceContainer>
      <CS.Title>
        {title.split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </CS.Title>
      <CS.ButtonForm>
        <CS.Button onClick={handleNavigate("/new")}>{newCustomer}</CS.Button>
        <CS.Button onClick={handleNavigate("/existing")}>{existingCustomer}</CS.Button>
      </CS.ButtonForm>
    </CS.ChoiceContainer>
  );
}
