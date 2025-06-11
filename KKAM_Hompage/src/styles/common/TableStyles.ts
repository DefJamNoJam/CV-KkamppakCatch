import styled from 'styled-components';

export const TableContainer = styled.div`
  flex: 1;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 2;
`;


export const Tbody = styled.tbody`
  display: block;
  height: calc(5 * 48px);
  overflow-y: auto;
`;

export const Th = styled.th`
  background: #87CEEB;
  color: #fff;
  text-align: center;
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 15px;
  white-space: nowrap;
`;

export const Tr = styled.tr<{ selected?: boolean }>`
  background: ${({ selected }) => (selected ? '#d0e7ff' : 'transparent')};
  &:hover {
    background: #f1f8ff;
  }
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  text-align: center;
  font-size: 14px;
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    white-space: normal;
    overflow: visible;
  }
`;