import styled, { css } from "styled-components";
import { Container } from "./../HomeStyles";

export const ReviewContainer = styled(Container)`
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
  color: #000;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const Card = styled.div<{ hasImage: boolean }>`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-self: start;
  width: 100%;

  ${props =>
    props.hasImage
      ? css`height: 520px;`
      : css`height: 300px;`}

  @media (max-width: 768px) {
    ${props => props.hasImage
      ? css`height: 480px;`
      : css`height: 280px;`}
  }
  @media (max-width: 480px) {
    height: auto;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 160px;
  }
  @media (max-width: 480px) {
    height: 140px;
  }
`;

export const CardContent = styled.div`
  padding: 16px;
  flex-grow: 1;

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const CardText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  word-break: break-word;
  white-space: normal;

  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid #eee;

  @media (max-width: 480px) {
    padding: 10px 12px;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  border-radius: 50%;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #aaa;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    margin-right: 6px;
  }
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Stars = styled.div`
  display: flex;

  @media (max-width: 480px) {
    svg { font-size: 14px; }
  }
`;

export const Star = styled.span`
  font-size: 16px;
  color: #f5a623;
  margin-left: 2px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    margin-left: 1px;
  }
`;