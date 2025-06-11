import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;
export const FormBox = styled.form`
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 360px;
  box-sizing: border-box;
`;
export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  text-align: center;
  color: #333;
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #87CEEB;
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #87CEEB;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background: #89aafc;
    cursor: not-allowed;
  }
`;
export const ErrorMsg = styled.div`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 12px;
  text-align: center;
`;
