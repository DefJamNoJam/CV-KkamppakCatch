import { useState, useEffect } from "react";
import * as AS from "@styles/application/AuthStyles";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import PasswordInput, { PasswordForm } from "@components/common/Password";

interface UserInfoProps {
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  passwordPlaceholder: string;
  confirmPasswordPlaceholder: string;
  onUserDataChange: (userData: UserData) => void;
}

export interface UserData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export default function UserInfo({
  namePlaceholder,
  emailPlaceholder,
  phonePlaceholder,
  passwordPlaceholder,
  confirmPasswordPlaceholder,
  onUserDataChange,
}: UserInfoProps): React.ReactElement {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const isValPw = password.length >= 8;
  const isCfPw = password !== "" && password === rePassword;

  useEffect(() => {
    onUserDataChange({ name, email, phone, password });
  }, [name, email, phone, password, onUserDataChange]);

  return (
    <>
      <AS.InputWrapper>
        <AS.IconWrapper><FaUser /></AS.IconWrapper>
        <AS.Input
          type="text"
          placeholder={namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </AS.InputWrapper>

      <AS.InputWrapper>
        <AS.IconWrapper><FaEnvelope /></AS.IconWrapper>
        <AS.Input
          type="email"
          placeholder={emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </AS.InputWrapper>

      <AS.InputWrapper>
        <AS.IconWrapper><FaPhone /></AS.IconWrapper>
        <AS.Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]{11}"
            placeholder={phonePlaceholder}
            value={phone}
            onChange={(e) => {
                const onlyDigits = e.target.value.replace(/\D/g, "");
                setPhone(onlyDigits.slice(0, 11));
            }}
            maxLength={11}
            required
        />
      </AS.InputWrapper>

      <PasswordInput
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        placeholder={passwordPlaceholder}
      />
      <PasswordInput
        password={rePassword}
        setPassword={setRePassword}
        showPassword={showRePassword}
        setShowPassword={setShowRePassword}
        placeholder={confirmPasswordPlaceholder}
      />

      <PasswordForm password={password} isValPw={isValPw} isCfPw={isCfPw} />
    </>
  );
}
