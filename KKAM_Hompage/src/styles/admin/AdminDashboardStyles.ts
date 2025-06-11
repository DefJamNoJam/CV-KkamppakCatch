import styled from 'styled-components';
import {
  TableContainer,
  Table,
  Th as CommonTh,
  Tr as CommonTr,
  Td as CommonTd,
} from '@styles/common/TableStyles';

export { TableContainer, Table };

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  padding-top: 120px;

  @media (max-width: 480px) {
    padding-top: 180px;
  }
`;


export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

const Btn = styled.button`
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover { opacity: 0.9; }
`;

export const LogoutBtn = styled(Btn)`
  background-color: #e74c3c;
`;

export const SaveBtn = styled(Btn)`
  background-color: #87CEEB;
`;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const Panel = styled.div`
  height: 305px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  overflow: auto;
`;

export const PanelTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-top: 0;
  margin-bottom: 12px;
`;

export const Placeholder = styled.div`
  color: #666;
  font-size: 14px;
  text-align: center;
`;

export const Th = styled(CommonTh)``;
export const Tr = styled(CommonTr)``;
export const Td = styled(CommonTd)``;


interface ToggleProps { active: boolean }
export const ToggleBtn = styled.button<ToggleProps>`
  background: ${({ active }) => (active ? '#28a745' : '#dc3545')};
  color: #fff;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  &:hover { opacity: 0.9; }
`;
