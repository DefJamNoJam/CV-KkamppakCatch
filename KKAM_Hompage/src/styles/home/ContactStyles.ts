import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { Container } from './../HomeStyles';

export const ContactContainer = styled(Container)`
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
  @media (max-width: 480px) {
    padding: 40px 12px;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Description = styled.p`
  color: #555;
  margin-top: 0.5rem;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.4);
  padding: 100px;

  @media (max-width: 768px) {
    padding: 60px;
  }
  @media (max-width: 480px) {
    padding: 30px;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const FormGroup = styled.div<{ fullWidth?: boolean }>`
  flex: ${props => (props.fullWidth ? '1 1 100%' : '1')};
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const Required = styled.span`
  color: red;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    padding: 0.6rem;
  }
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    padding: 0.6rem;
    margin-bottom: 16px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #1e90ff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.9rem;
    font-size: 0.95rem;
  }
  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

export const ToastCon = styled(ToastContainer)`
  .Toastify__toast-body {
    display: flex;
    align-items: center;
    color: #333;
  }

  .Toastify__toast-icon svg {
    fill: #87ceeb !important;
  }

  .Toastify__progress-bar {
    background: #87ceeb !important;
  }
`;
