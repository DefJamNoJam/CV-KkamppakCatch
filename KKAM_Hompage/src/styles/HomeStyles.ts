import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const AppSection = styled(Section)`
  background-color: #f4f6f8;
  align-items: center;
  height: auto;
`;

export const MainSection = styled(Section)`
  text-align: right;
  padding: 0 20px;

  background: linear-gradient(
    to bottom,
    #87ceeb 0%,   /* skyblue */
    #ffffff 100% /* white */
  );

  @media (max-width: 768px) {
    padding: 0%;
  }
`;

export const ReviewSection = styled(Section)`
    background: linear-gradient(
    to bottom,
    #fff 0%,   
    #efeeee 100%
  );
`;

export const FeatureSection = styled(Section)`
  flex-wrap: wrap;

  background: linear-gradient(
    to bottom,
    #efeeee 0%,
    #B6E1F3 100%
  );
`;

export const ContactSection = styled(Section)`
    background: linear-gradient(
    to bottom,
    #B6E1F3 0%,   
    #87ceeb 100%
  );
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;