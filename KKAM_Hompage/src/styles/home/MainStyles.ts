import styled, { keyframes } from "styled-components";
import { Container } from "./../HomeStyles";

export const MainContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;

  /* 태블릿 */
  @media (max-width: 768px) {
    padding: 50px 16px;
  }
  /* 모바일 */
  @media (max-width: 480px) {
    padding: 40px 12px;
  }
`;

export const Top = styled.h3`
  font-size: 2.2rem;
  margin: 0;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const scrollGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Tilte = styled.h1`
  text-align: center;
  font-size: 6rem;
  margin: 0;

  background: linear-gradient(
    45deg,
    #ffffff 0%,
    #000000 25%,
    #ffffff 50%,
    #000000 75%,
    #ffffff 100%
  );
  background-size: 200% 200%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${scrollGradient} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const Bottom = styled.h5`
  font-size: 1.5rem;
  margin: 10px 0 0;
  color: #000;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 8px 0 0;
  }
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin: 6px 0 0;
  }
`;

export const Button = styled.button`
  background: #fefefe;
  margin-top: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  border: 1px solid #444;
  border-radius: 10px;
  color: #444;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #dedede;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 8px 16px;
    margin-top: 25px;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 6px 12px;
    margin-top: 20px;
  }
`;
