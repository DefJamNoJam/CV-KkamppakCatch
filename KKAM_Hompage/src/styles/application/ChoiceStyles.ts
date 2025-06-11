import styled from "styled-components";
import { Container } from "./../HomeStyles";

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
};

export const ChoiceContainer = styled(Container)`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding: 0 1rem;
  font-size: 4rem;
  margin-bottom: 2rem;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
    padding: 0 0.8rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    padding: 0 0.5rem;
  }
`;

export const ButtonForm = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 20px;
  }
`;

export const Button = styled.button`
  font-size: 2rem;
  border-radius: 15px;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
    padding: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
    padding: 12px;
  }

  &:first-child {
    background-color: #0258ed;
    &:hover {
      background-color: #1a4184;
    }
  }

  &:last-child {
    background-color: #87ceeb;
    &:hover {
      background-color: #4fa2b7;
    }
  }
`;
