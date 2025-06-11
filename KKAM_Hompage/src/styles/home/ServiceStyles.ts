import styled from "styled-components";
import { Container } from "./../HomeStyles";

export const ServiceContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 80px 20px;

  h1 {
    font-size: 2rem;
    margin-bottom: 0;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    gap: 60px;
    padding: 60px 16px;

    h1 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 480px) {
    gap: 40px;
    padding: 40px 12px;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

interface SlideContentProps {
  reverse?: boolean;
}

export const SlideContent = styled.div<SlideContentProps>`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #eee;
  border-radius: 16px;
  padding: 40px;

  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const TextArea = styled.div`
  flex: 1.2;
  min-width: 0;             /* ★ 추가: flex-shrink가 동작하도록 */
  text-align: left;
  padding: 20px;

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    word-break: break-all;   /* ★ CJK 긴 텍스트 줄바꿈 */
    overflow-wrap: anywhere;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #555;
    word-break: break-all;   /* ★ CJK 긴 텍스트 줄바꿈 */
    overflow-wrap: anywhere;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 16px;

    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    h2 {
      font-size: 1.25rem;
    }
    p {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    background: #f0f4ff;
    color: #0258ed;
    padding: 6px 12px;
    border-radius: 12px;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    gap: 6px;

    span {
      padding: 5px 10px;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    gap: 4px;

    span {
      padding: 4px 8px;
      font-size: 0.75rem;
    }
  }
`;

export const ImageArea = styled.div`
  flex: 2;
  height: 400px;
  overflow: hidden;

  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    height: 300px;

    video {
      height: 100%;
      object-position: center;
    }
  }

  @media (max-width: 480px) {
    height: 200px;
    margin-top: 16px;
  }
`;

export const TechnologyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 80px 20px;

  h2 {
    font-size: 2.25rem;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1rem;
    color: #555;
    margin-top: 0;
    margin-bottom: 60px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 60px 16px;
    gap: 30px;

    h2 {
      font-size: 2rem;
    }
    .subtitle {
      font-size: 0.95rem;
      margin-bottom: 60px;
    }
  }

  @media (max-width: 480px) {
    padding: 40px 12px;
    gap: 20px;

    h2 {
      font-size: 1.75rem;
    }
    .subtitle {
      font-size: 0.9rem;
      margin-bottom: 40px;
    }
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

export const TechCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const ImagePair = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 8px;
  }

  .arrow {
    margin: 0 12px;
    font-size: 1.5rem;
    color: #0258ed;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;

    img {
      width: 60px;
      height: 60px;
    }
    .arrow {  
      font-size: 1.25rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 12px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const CardDesc = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.6rem;
  }
`;

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }
  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const TagItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f0f4ff;
  color: #0258ed;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.85rem;

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 0.8rem;
    gap: 4px;
  }
  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 0.75rem;
    gap: 3px;
  }
`;
