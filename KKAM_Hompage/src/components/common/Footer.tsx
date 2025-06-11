import {
  FooterContainer,
  Instagram,
  LeftSection,
  RightSection,
  Youtube,
} from "@styles/FooterStyles";

export default function Footer() {
  return (
    <FooterContainer>
      <LeftSection>
        <h2>깜빡Catch</h2>
        <p>서울 서초구 서초중앙로 53, 3층</p>
        <p>+82-2-6956-2255</p>
      </LeftSection>

      <RightSection>
        <div>©2025. Intel Inc. all rights reserved.</div>
        <div className="social">
          <a
            href="https://www.instagram.com/loha_yujuni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.youtube.com/@slow_doctor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube />
          </a>
        </div>
      </RightSection>
    </FooterContainer>
  );
}
