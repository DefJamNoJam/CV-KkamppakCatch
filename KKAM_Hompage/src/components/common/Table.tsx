import * as TS from "@styles/common/TableStyles";
import { Children, ReactNode } from "react";

interface TableProps {
  columns: (string | ReactNode)[];
  loading: boolean;
  noDataMessage: string;
  colGroup?: ReactNode;
  children: ReactNode;
}

export default function Table({
  columns,
  loading,
  noDataMessage,
  colGroup,
  children,
}: TableProps) {
  if (loading) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>로딩 중...</div>;
  }

  const hasRows = Children.count(children) > 0;

  return (
    <TS.TableContainer>
      <TS.Table>
        {/* 고정 너비가 필요할 경우 colGroup을 전달하세요 */}
        {colGroup}

        <thead>
          <tr>
            {columns.map((col, idx) => (
              <TS.Th key={idx}>{col}</TS.Th>
            ))}
          </tr>
        </thead>

        <tbody>
          {hasRows ? (
            children
          ) : (
            <TS.Tr>
              <TS.Td colSpan={columns.length} style={{ textAlign: 'center', padding: '20px' }}>
                {noDataMessage}
              </TS.Td>
            </TS.Tr>
          )}
        </tbody>
      </TS.Table>
    </TS.TableContainer>
  );
}