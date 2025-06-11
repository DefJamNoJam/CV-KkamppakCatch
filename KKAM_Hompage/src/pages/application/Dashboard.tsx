import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { supabase } from "@services/supabaseClient";
import { useNavigate } from "react-router-dom";
import Table from "@components/common/Table";
import * as DS from "@styles/application/DashboardStyles";
import { UseLanguage } from "@hooks/UseLanguage";
import { DashboardData } from "@constants/DashboardData";

interface Store {
  sid: string;
  store_nm: string;
  address: string;
  use_yn: boolean;
  sn: string;
  created_at: string;
  updated_at: string;
  isNew?: boolean;
}

interface EditValues {
  store_nm: string;
  address: string;
  sn: string;
}

const SESSION_TIMEOUT = 60000 * 60;

export default function Dashboard() {
  const navigate = useNavigate();
  const { lang } = UseLanguage();
  const data = useMemo(() => DashboardData.translations[lang], [lang]);

  const [stores, setStores] = useState<Store[]>([]);
  const [loadingStores, setLoadingStores] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [editValues, setEditValues] = useState<Record<string, EditValues>>({});
  const [pendingDeletes, setPendingDeletes] = useState<Set<string>>(new Set());
  const [modified, setModified] = useState<Set<string>>(new Set());

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const uid = useMemo(() => localStorage.getItem("uid"), []);

  // Column headers
  const columns = useMemo(() => [
    "",
    "상태",
    data.columns[2],
    data.columns[3],
    data.columns[4],
    data.columns[5],
    data.columns[6],
    data.columns[7],
  ], [data.columns]);

  const colGroup = (
    <colgroup>
      <col style={{ width: 50 }} />
      <col style={{ width: 60 }} />
      <col />
      <col />
      <col style={{ width: 80 }} />
      <col style={{ width: 60 }} />
      <col style={{ width: 90 }} />
      <col style={{ width: 90 }} />
    </colgroup>
  );

  const isSaveDisabled = useMemo(() =>
    pendingDeletes.size === 0 && modified.size === 0,
    [pendingDeletes, modified]
  );

  const handleLogout = useCallback(() => {
    localStorage.removeItem("uid");
    navigate("/");
  }, [navigate]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(handleLogout, SESSION_TIMEOUT);
  }, [handleLogout]);

  const formatDate = useCallback((dateString: string) => {
    try { return new Date(dateString).toISOString().split("T")[0]; }
    catch { return dateString; }
  }, []);

  const fetchStores = useCallback(async () => {
    if (!uid) return;
    setLoadingStores(true);
    setError(null);
    try {
      const { data: fetched, error: fetchErr } = await supabase
        .from("store")
        .select("sid, store_nm, address, use_yn, sn, created_at, updated_at")
        .eq("uid", uid)
        .order("created_at");
      if (fetchErr) throw fetchErr;
      setStores(fetched as Store[]);
      setPendingDeletes(new Set());
      setModified(new Set());
      setEditValues({});
    } catch (err) {
      setError(err instanceof Error ? err.message : data.errors.fetchFailed);
      setStores([]);
    } finally {
      setLoadingStores(false);
    }
  }, [uid, data.errors.fetchFailed]);

  const toggleSelect = useCallback((sid: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(sid)) next.delete(sid);
      else {
        next.add(sid);
        const store = stores.find(s => s.sid === sid);
        if (store) {
          setEditValues(ev => ({
            ...ev,
            [sid]: ev[sid] ?? { store_nm: store.store_nm, address: store.address, sn: store.sn },
          }));
        }
      }
      return next;
    });
  }, [stores]);

  const createChangeHandler = useCallback((field: keyof EditValues) => {
    return (sid: string, value: string) => {
      setEditValues(prev => ({
        ...prev,
        [sid]: { ...prev[sid], [field]: value },
      }));
      setModified(prev => new Set(prev).add(sid));
      if (field === 'address') {
        setStores(prev => prev.map(s =>
          s.sid === sid ? { ...s, use_yn: false } : s
        ));
      }
    };
  }, []);

  const handleNameChange = useMemo(() => createChangeHandler('store_nm'), [createChangeHandler]);
  const handleAddressChange = useMemo(() => createChangeHandler('address'), [createChangeHandler]);
  const handleSnChange = useMemo(() => createChangeHandler('sn'), [createChangeHandler]);

  const handleAdd = useCallback(() => {
    const tempSid = `new-${Date.now()}`;
    setStores(prev => [{
      sid: tempSid,
      store_nm: "",
      address: "",
      use_yn: false,
      sn: "",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      isNew: true,
    }, ...prev]);
    setSelected(prev => new Set(prev).add(tempSid));
    setEditValues(ev => ({ ...ev, [tempSid]: { store_nm: "", address: "", sn: "" } }));
    setModified(prev => new Set(prev).add(tempSid));
  }, []);

  const handleDelete = useCallback(() => {
    setStores(prev => prev.filter(s => !(selected.has(s.sid) && s.isNew)));
    setPendingDeletes(prev => {
      const next = new Set(prev);
      stores.forEach(s => { if (selected.has(s.sid) && !s.isNew) next.add(s.sid); });
      return next;
    });
    setSelected(new Set());
  }, [selected, stores]);

  const handleSaveChanges = useCallback(async () => {
    if (!uid) return;
    setError(null);
    setLoadingStores(true);
    try {
      const dels = Array.from(pendingDeletes);
      if (dels.length) {
        const { error: delErr } = await supabase.from("store").delete().in("sid", dels);
        if (delErr) throw delErr;
      }
      const ups = Array.from(modified).filter(sid => !sid.startsWith("new-"));
      for (const sid of ups) {
        const { store_nm, address, sn } = editValues[sid];
        const orig = stores.find(s => s.sid === sid);
        const addressChanged = orig && orig.address !== address;
        const { error: upErr } = await supabase
          .from("store")
          .update({ store_nm, address, sn, updated_at: new Date().toISOString(), ...(addressChanged ? { use_yn: false } : {}) })
          .eq("sid", sid);
        if (upErr) throw upErr;
      }
      const newRecs = stores.filter(s => s.isNew);
      if (newRecs.length) {
        const insertData = newRecs.map(s => ({ uid, store_nm: editValues[s.sid].store_nm, address: editValues[s.sid].address, use_yn: false, sn: editValues[s.sid].sn }));
        const { error: insErr } = await supabase.from("store").insert(insertData);
        if (insErr) throw insErr;
      }
      await fetchStores();
    } catch (err) {
      setError(err instanceof Error ? err.message : data.errors.saveFailed);
    } finally {
      setLoadingStores(false);
      setSelected(new Set());
    }
  }, [pendingDeletes, modified, stores, editValues, fetchStores, uid, data.errors.saveFailed]);

  useEffect(() => {
    resetTimer();
    const events = ["mousemove","keydown","click","scroll","touchstart"];
    const onActivity = () => resetTimer();
    events.forEach(evt => window.addEventListener(evt, onActivity));
    return () => { if (timerRef.current) clearTimeout(timerRef.current); events.forEach(evt => window.removeEventListener(evt, onActivity)); };
  }, [resetTimer]);

  useEffect(() => { if (uid) fetchStores(); }, [fetchStores, uid]);

  const renderRows = () => {
    if (!stores.length) {
      return <DS.Tr><DS.Td colSpan={columns.length} style={{ textAlign: 'center', padding: '20px' }}>{data.noStores}</DS.Td></DS.Tr>;
    }
    return stores.map(store => (
      <DS.Tr key={store.sid} style={pendingDeletes.has(store.sid) ? { opacity: 0.5 } : {}}>
        <DS.Td><input type="checkbox" checked={selected.has(store.sid)} disabled={pendingDeletes.has(store.sid)} onChange={() => toggleSelect(store.sid)} /></DS.Td>
        <DS.Td>{store.isNew ? data.states.add : pendingDeletes.has(store.sid) ? data.states.delete : modified.has(store.sid) ? data.states.edit : ''}</DS.Td>
        <DS.Td>{selected.has(store.sid) ? <input value={editValues[store.sid]?.store_nm || ''} onChange={e => handleNameChange(store.sid, e.target.value)} /> : editValues[store.sid]?.store_nm ?? store.store_nm}</DS.Td>
        <DS.Td>{selected.has(store.sid) ? <input value={editValues[store.sid]?.address || ''} onChange={e => handleAddressChange(store.sid, e.target.value)} /> : editValues[store.sid]?.address ?? store.address}</DS.Td>
        <DS.Td><DS.ToggleBtn active={store.use_yn} style={{ cursor: 'default' }}>{store.use_yn ? data.approval.approved : data.approval.notApproved}</DS.ToggleBtn></DS.Td>
        <DS.Td>{selected.has(store.sid) ? <input value={editValues[store.sid]?.sn || ''} onChange={e => handleSnChange(store.sid, e.target.value)} /> : editValues[store.sid]?.sn ?? store.sn}</DS.Td>
        <DS.Td>{formatDate(store.created_at)}</DS.Td>
        <DS.Td>{formatDate(store.updated_at)}</DS.Td>
      </DS.Tr>
    ));
  };

  return (
    <DS.Wrapper>
      {error && <div style={{ color:'red', marginBottom:10 }}>{`Error: ${error}`}</div>}
      <DS.BtnWrapper>
        <DS.LogoutBtn onClick={handleLogout}>{data.buttons.logout}</DS.LogoutBtn>
      </DS.BtnWrapper>
      <DS.PanelContainer>
        <DS.Panel>
          <DS.PanelHeader>
            <DS.PanelWarpper>
              <DS.PanelTitle>{data.title}</DS.PanelTitle>
              <DS.PanelText>{data.subtitle}</DS.PanelText>
            </DS.PanelWarpper>
            <DS.BtnWrapper>
              <DS.SaveBtn onClick={handleSaveChanges} disabled={isSaveDisabled}>{data.buttons.save}</DS.SaveBtn>
              <DS.SaveBtn onClick={handleAdd}>{data.buttons.add}</DS.SaveBtn>
              <DS.LogoutBtn onClick={handleDelete} disabled={selected.size === 0}>{data.buttons.delete}</DS.LogoutBtn>
            </DS.BtnWrapper>
          </DS.PanelHeader>
          <Table
            columns={columns}
            loading={loadingStores}
            noDataMessage={data.noStores}
            colGroup={colGroup}
          >
            {renderRows()}
          </Table>
        </DS.Panel>
      </DS.PanelContainer>
    </DS.Wrapper>
  )
}
