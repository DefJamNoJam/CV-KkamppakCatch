import styled from "styled-components";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export const FooterContainer = styled.footer`
  background: #87ceeb;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 14px;
  border-top: 1px solid #666;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px 10px;
  }
`;

export const LeftSection = styled.div`
  max-width: 300px;

  h2 {
    font-size: 1.8rem;
    margin-top: 0;
    margin-bottom: 12px;
  }

  p {
    line-height: 1.6;
    margin: 4px 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    max-width: 100%;
  }
`;

export const RightSection = styled.div`
  text-align: right;
  flex: 1;
  min-width: 250px;

  .social {
    margin: 16px 0;

    a {
      margin-left: 12px;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 12px 0;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export const Youtube = styled(FaYoutube)`
  color: #fff;
  transition: all 0.3s;

  &:hover {
    color: red;
    background: white;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    margin: 0 8px;
  }
`;

export const Instagram = styled(FaInstagram)`
  color: #fff;
  transition: all 0.3s;

  &:hover {
    background: radial-gradient(
      circle at 33% 100%,
      #fed373 4%,
      #f15245 30%,
      #d92e7f 62%,
      #9b36b7 85%,
      #515ecf
    );
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    margin: 0 8px;
  }
`;
