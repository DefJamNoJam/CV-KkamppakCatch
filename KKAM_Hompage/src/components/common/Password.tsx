import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaCircle, FaCircleXmark, FaCircleCheck } from "react-icons/fa6";
import { Input, InputWrapper, IconWrapper, PwContainer, PwDiv, PwIcon } from "@styles/application/AuthStyles";
import { UseLanguage } from "@hooks/UseLanguage";
import { AuthData } from "@constants/AuthData";

interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  placeholder: string;
}

interface PasswordFormProps {
  password: string;
  isValPw: boolean;
  isCfPw: boolean;
}

export default function PasswordInput({ password, setPassword, showPassword, setShowPassword, placeholder }: PasswordInputProps) {
  return (
    <InputWrapper>
      <IconWrapper><FaLock /></IconWrapper>
      <Input 
        type={showPassword ? "text" : "password"} 
        placeholder={placeholder}
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <IconWrapper isClickable={true} onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </IconWrapper>
    </InputWrapper>
  );
}

export function PasswordForm({ password, isValPw, isCfPw }: PasswordFormProps) {
  const { lang } = UseLanguage();
  const { minLength, match } = AuthData.passwordRules[lang];

  const getIcon = (condition: boolean | null) => {
    if (condition === null) return <FaCircle />;
    return condition ? <FaCircleCheck /> : <FaCircleXmark />;
  };

  return (
    <PwContainer>
      <PwDiv>
        <PwIcon isValid={password ? isValPw : null}>
          {getIcon(password ? isValPw : null)}
        </PwIcon>
        <span>{minLength}</span>
      </PwDiv>
      <PwDiv>
        <PwIcon isValid={password ? isCfPw : null}>
          {getIcon(password ? isCfPw : null)}
        </PwIcon>
        <span>{match}</span>
      </PwDiv>
    </PwContainer>
  );
}
