import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MainSection, ContactSection, FeatureSection, ReviewSection, Section, Wrapper } from "@styles/HomeStyles";
import Footer from "@components/common/Footer";

const Main = lazy(() => import("@components/home/Main"));
const Service = lazy(() => import("@components/home/Service"));
const Review = lazy(() => import("@components/home/Review"));
const Features = lazy(() => import("@components/home/Features"));
const Contact = lazy(() => import("@components/home/Contact"));

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // 마운트 직후에도, 혹은 다른 라우트에서 돌아왔을 때도
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <MainSection id="main"><Main /></MainSection>
        <Section id="service"><Service /></Section>
        <ReviewSection id="review"><Review /></ReviewSection>
        <FeatureSection id="features"><Features /></FeatureSection>
        <ContactSection id="contact"><Contact /></ContactSection>
      </Suspense>
      <Footer />
    </Wrapper>
  );
}