import { Link } from "react-router-dom";
import styled from "styled-components";

// 타입 정의
interface NavProps {
  scrolled: boolean;
}

interface NavListContainerProps {
  isOpen: boolean;
}

interface LanguageMenuProps {
  isOpen: boolean;
}

export const Nav = styled.nav<NavProps>`
  background: ${({ scrolled }) => (scrolled ? '#fff' : 'transparent')};
  height: 80px;
  color: #0258ed;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
  border-bottom: ${({ scrolled }) => (scrolled ? '1px solid #ddd' : 'none')};
  box-sizing: border-box;
  transition: all 0.3s ease;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  
  img {
    height: 100%;
    width: auto;
    cursor: pointer;
    object-fit: contain;
  }
`;

export const AdminBtn = styled.button`
  background: none;
  border: none;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #444;
  padding: 0;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NavListContainer = styled.div<NavListContainerProps>`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: #0258ed;
    padding: 20px;
    z-index: 100;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 15px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  a {
    color: #0258ed;
    font-weight: 600;
    text-decoration: none;
    display: block;
    padding: 8px 16px;
    transition: color 0.2s ease;
    
    &:hover {
      color: #0247be;
    }

    @media (max-width: 768px) {
      color: #fff;
      width: 100%;
      text-align: center;
      padding: 8px 0px;
      &:hover {
        color: #e5e5e5;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #444;
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;

  &:hover {
    color: #000;
  }
`;

export const RightForm = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Button = styled.button`
  background: #fefefe;
  font-weight: 600;
  border: 1px solid #444;
  border-radius: 10px;
  padding: 8px 16px;
  margin-right: 20px;
  cursor: pointer;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f0f0f0;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
  }
`;

export const LanguageToggle = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0;
  color: #444;
  cursor: pointer;
  height: 40px;
  width: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LanguageMenu = styled.ul<LanguageMenuProps>`
  list-style: none;
  position: absolute;
  top: 60px;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px 0;
  margin: 0;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  min-width: 120px;

  li {
    padding: 8px 16px;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s ease;

    &:hover {
      background: #f5f5f5;
    }
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    margin-top: 10px;
    box-shadow: none;
  }
`;

export const MobileLang = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  gap: 20px;
`;