// src/pages/Admin.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { supabase } from "@services/supabaseClient";
import { Button, Container, ErrorMsg, FormBox, Input, Title } from "@styles/admin/AdminStyles";

export default function Admin() {
  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const uid = localStorage.getItem("AdminUid");
      if (uid) {
        const { data, error: err } = await supabase
          .from("user")
          .select("uid")
          .eq("uid", uid)
          .single();

        if (data && !err) {
          setAuthenticated(true);
        } else {
          localStorage.removeItem("AdminUid");
        }
      }
      setChecking(false);
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: supaError } = await supabase
        .from("user")
        .select("uid")
        .eq("email", email)
        .eq("password", password)
        .single();

      if (supaError || !data) {
        throw new Error("아이디 또는 비밀번호가 올바르지 않습니다.");
      }

      localStorage.setItem("AdminUid", data.uid);

      setAuthenticated(true);
      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return <Container>Loading...</Container>;
  }
  if (!authenticated) {
    return (
      <Container>
        <FormBox onSubmit={handleSubmit}>
          <Title>관리자 로그인</Title>
          <Input
            type="text"
            placeholder="아이디"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? "로딩 중..." : "로그인"}
          </Button>
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </FormBox>
      </Container>
    );
  }

  return <Outlet />;
}