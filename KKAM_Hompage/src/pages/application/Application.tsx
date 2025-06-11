import { Suspense, lazy } from "react";
import { AppSection, Wrapper } from "@styles/HomeStyles";

const Choice = lazy(() => import("@components/application/Choice"));

export default function Home() {
  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <AppSection id="choice"><Choice /></AppSection>
      </Suspense>
    </Wrapper>
  );
}
