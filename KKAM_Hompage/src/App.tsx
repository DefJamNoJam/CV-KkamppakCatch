import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PopupProvider } from "@components/common/Popup";
import styled, { createGlobalStyle } from "styled-components";
import { LanguageProvider } from "@hooks/UseLanguage";

import RootLayout from "@layout/RootLayout";

const Home = lazy(() => import("@pages/Home"));
const Admin = lazy(() => import("@pages/admin/Admin"));
const AdminDashboard = lazy(() => import("@pages/admin/AdminDashboard"));
const Application = lazy(() => import("@pages/application/Application"));
const New = lazy(() => import("@pages/application/New"));
const Exsiting = lazy(() => import("@pages/application/Existing"));
const Dashboard = lazy(() => import("@pages/application/Dashboard"));

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/admin",
        element: <Admin />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "dashboard", element: <AdminDashboard /> },
        ],
      },
      { path: "/app", element: <Application /> },
      { path: "/new", element: <New /> },
      { path: "/existing", 
        element: <Exsiting />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "dashboard", element: <Dashboard /> },
        ],
       },
    ],
  },
]);

export default function App() {
  return (
    <>
      <GlobalStyle />
      <LanguageProvider>
        <StyledWrapper>
          <PopupProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <RouterProvider router={router} />
            </Suspense>
          </PopupProvider>
        </StyledWrapper>
      </LanguageProvider>
    </>
  );
}

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
