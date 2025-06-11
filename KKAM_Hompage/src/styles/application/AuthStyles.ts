import { Container } from "@styles/HomeStyles";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthContainer = styled(Container)`
    padding: 80px 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  background: white;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  font-size: 16px;
  outline: none;
  padding: 8px;

  &:focus {
    border-color: #444;
  }
`;

export const IconWrapper = styled.div<{ isClickable?: boolean }>`
  padding: 8px;
  color: #666;
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
`;

export const Button = styled.button`
  padding: 10px 16px;
  width: 100%;
  font-size: 16px;
  border-radius: 4px;
`;

export const StyledLink = styled(Link)`
  color: #444;
  text-decoration: none;

  &:hover{
    color: #666;
  }
`;

export const PwContainer = styled.div`
 width: 100%;
 border: 1px solid #ddd;
 padding: 10px;
`

export const PwDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  text-align: left;
  padding: 5px;
`;

export const PwIcon = styled.div<{ isValid: boolean | null }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  color: ${({ isValid }) => 
    isValid === null ? "#AAA" : 
    isValid ? "green" : "red"};
`;

export const StripedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 calc(1rem + 8px) 0;
  position: relative;
  width: 100%;
  
  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    height: 2px;
    background-color: #aaa;
  }
`;

export const StripedText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 1rem;
  color: #666;
`;

// 전체 점포 섹션 컨테이너
export const StoreContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`;

// 헤더: 제목과 추가 버튼 좌우 정렬
export const StoreHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.25rem;
    margin: 0;
  }

  button {
    margin-left: auto;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    background: #3498db;
    color: white;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #2980b9;
    }
  }
`;

// 점포 폼 그룹: 3개의 입력과 삭제 버튼 그리드 배치
export const StoreFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;

  input{
    border: 1px solid #ddd;
  }
`;

// 점포 삭제 버튼: 입력박스 옆 중앙에 배치
export const DeleteButton = styled.button`
  grid-column: 2 / 3;
  grid-row: 1 / 4;
  align-self: self-end;
  justify-self: center;
  width: 32px;
  height: 32px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #c0392b;
  }

  svg {
    pointer-events: none;
  }
`;

export const ErrorMessage = styled.p`
`;
