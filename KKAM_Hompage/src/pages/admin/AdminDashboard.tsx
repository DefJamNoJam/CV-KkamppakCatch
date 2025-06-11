import { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from "@services/supabaseClient";
import { useNavigate } from "react-router-dom";
import Table from "@components/common/Table";
import * as ADS from "@styles/admin/AdminDashboardStyles";

interface User {
  uid: string;
  email: string;
  name: string;
  use_yn: boolean;
  created_at: string;
  updated_at: string;
}

interface Store {
  sid: string;
  store_nm: string;
  address: string;
  use_yn: boolean;
  created_at: string;
  updated_at: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingStores, setLoadingStores] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const SESSION_TIMEOUT = 100000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("AdminUid");
    navigate("/");
  }, [navigate]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(handleLogout, SESSION_TIMEOUT);
  }, [handleLogout]);

  const fetchUsers = useCallback(async () => {
    setLoadingUsers(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("user")
        .select("uid, email, name, use_yn, created_at, updated_at")
        .order("created_at");
      if (error) throw error;
      setUsers(data as User[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch users");
      setUsers([]);
    } finally {
      setLoadingUsers(false);
    }
  }, []);

  const fetchStores = useCallback(async (uid: string) => {
    if (!uid) return;
    setLoadingStores(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("store")
        .select("sid, store_nm, address, use_yn, created_at, updated_at")
        .eq("uid", uid);
      if (error) throw error;
      setStores(data as Store[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch stores");
      setStores([]);
    } finally {
      setLoadingStores(false);
    }
  }, []);

  const toggleUser = useCallback(async (uid: string, current: boolean) => {
    setError(null);
    try {
      const { error } = await supabase
        .from("user")
        .update({ use_yn: !current })
        .eq("uid", uid);
      if (error) throw error;
      setUsers(prev => prev.map(u => u.uid === uid ? { ...u, use_yn: !current } : u));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update user");
    }
  }, []);

  const toggleStore = useCallback(async (sid: string, current: boolean) => {
    setError(null);
    try {
      const { error } = await supabase
        .from("store")
        .update({ use_yn: !current })
        .eq("sid", sid);
      if (error) throw error;
      setStores(prev => prev.map(s => s.sid === sid ? { ...s, use_yn: !current } : s));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update store");
    }
  }, []);

  const formatDate = useCallback((date: string) => {
    try { return new Date(date).toISOString().split('T')[0]; }
    catch { return date; }
  }, []);

  const stopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const handleUserSelect = useCallback((uid: string) => {
    setSelectedUserId(uid);
  }, []);

  useEffect(() => {
    resetTimer();
    const events = ["mousemove","keydown","click","scroll","touchstart"];
    const onActivity = () => resetTimer();
    events.forEach(evt => window.addEventListener(evt, onActivity));
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach(evt => window.removeEventListener(evt, onActivity));
    };
  }, [resetTimer]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (selectedUserId) {
      fetchStores(selectedUserId);
    } else {
      setStores([]);
    }
  }, [selectedUserId, fetchStores]);

  const colGroup = (
    <colgroup>
      <col style={{ width: 300 }} />
      <col />
      <col />
      <col style={{ width: 80 }} />
      <col style={{ width: 100 }} />
      <col style={{ width: 100 }} />
    </colgroup>
  );

  return (
    <ADS.Wrapper>
      {error && <div style={{ color:'red',padding:10 }}>Error: {error}</div>}
      <ADS.BtnWrapper>
        <ADS.LogoutBtn onClick={handleLogout}>로그아웃</ADS.LogoutBtn>
      </ADS.BtnWrapper>

      <ADS.PanelContainer>
        <ADS.Panel>
          <ADS.PanelTitle>사용자 목록</ADS.PanelTitle>
          <Table
            columns={
              ["아이디","이메일","이름","승인 여부","생성일","수정일"]
            }
            loading={loadingUsers}
            noDataMessage="사용자가 없습니다."
            colGroup={colGroup}
          >
            {users.map(u => (
              <ADS.Tr
                key={u.uid}
                onClick={() => handleUserSelect(u.uid)}
                selected={selectedUserId===u.uid}
              >
                <ADS.Td>{u.uid}</ADS.Td>
                <ADS.Td>{u.email}</ADS.Td>
                <ADS.Td>{u.name}</ADS.Td>
                <ADS.Td>
                  <ADS.ToggleBtn
                    active={u.use_yn}
                    onClick={e => { stopPropagation(e); toggleUser(u.uid,u.use_yn); }}
                  >
                    {u.use_yn ? "승인" : "미승인"}
                  </ADS.ToggleBtn>
                </ADS.Td>
                <ADS.Td>{formatDate(u.created_at)}</ADS.Td>
                <ADS.Td>{formatDate(u.updated_at)}</ADS.Td>
              </ADS.Tr>
            ))}
          </Table>
        </ADS.Panel>

        <ADS.Panel>
          <ADS.PanelTitle>가게 목록</ADS.PanelTitle>
          {!selectedUserId ? (
            <ADS.Placeholder>사용자를 선택하세요.</ADS.Placeholder>
          ) : (
            <Table
              columns={
                ["가게 ID","가게명","주소","승인 여부","생성일","수정일"]
              }
              loading={loadingStores}
              noDataMessage="가게가 없습니다."
              colGroup={colGroup}
            >
              {stores.map(s => (
                <ADS.Tr key={s.sid}>
                  <ADS.Td>{s.sid}</ADS.Td>
                  <ADS.Td>{s.store_nm}</ADS.Td>
                  <ADS.Td>{s.address}</ADS.Td>
                  <ADS.Td>
                    <ADS.ToggleBtn
                      active={s.use_yn}
                      onClick={() => toggleStore(s.sid,s.use_yn)}
                    >
                      {s.use_yn ? "승인" : "미승인"}
                    </ADS.ToggleBtn>
                  </ADS.Td>
                  <ADS.Td>{formatDate(s.created_at)}</ADS.Td>
                  <ADS.Td>{formatDate(s.updated_at)}</ADS.Td>
                </ADS.Tr>
              ))}
            </Table>
          )}
        </ADS.Panel>
      </ADS.PanelContainer>
    </ADS.Wrapper>
  );
}