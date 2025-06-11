import styled from "styled-components";
import { Container } from "./../HomeStyles";

export const FeaturesContainer = styled(Container)`
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
  @media (max-width: 480px) {
    padding: 40px 12px;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`;

export const Subtitle = styled.p`
  color: #0258ed;
  font-size: 20px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-block: 0;
  color: #000;

  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

// Flex layout for desktops/tablets, grid for mobile to ensure equal-width cards
export const Body = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: stretch;

  @media (max-width: 768px) {
    gap: 16px;
    align-items: stretch;
  }
  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    align-items: stretch;
  }
`;

export const PlanCard = styled.div`
  /* 카드 내에서 콘텐츠를 수직 배치하고, 버튼을 아래로 고정 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  text-align: center;
  flex: 0 0 280px;

  @media (max-width: 768px) {
    flex: 0 0 240px;
    padding: 20px;
  }
  @media (max-width: 480px) {
    flex: none;
    width: 100%;
    padding: 16px;
  }
`;

export const PlanTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
`;

export const PlanPrice = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 16px 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 14px 0;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin: 12px 0;
  }
`;

export const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  margin-bottom: 24px;

  li {
    margin: 8px 0;

    @media (max-width: 768px) {
      margin: 6px 0;
      font-size: 0.95rem;
    }
    @media (max-width: 480px) {
      margin: 5px 0;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`;

export const SubscribeButton = styled.button`
  background: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 1rem;

  &:hover {
    background: #005bb5;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.95rem;
  }
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;
