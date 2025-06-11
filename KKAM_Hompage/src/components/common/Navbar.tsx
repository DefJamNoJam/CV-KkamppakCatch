import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import * as NS from "@styles/NavbarStyles";
import { UseLanguage } from "@hooks/UseLanguage";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const {
    t,
    langOpen,
    languageOptions,
    toggleLang,
    selectLanguage,
    langMenuRef,
  } = UseLanguage();

  const navItems = useMemo(
    () => [
      { href: "/#service", label: t.service },
      { href: "/#review", label: t.solution },
      { href: "/#features", label: t.product },
      { href: "/#contact", label: t.features },
    ],
    [t]
  );

  // 스크롤 시 배경 변경
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 반응형 체크 (matchMedia 사용)
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handleResize = (e: MediaQueryListEvent | MediaQueryList): void => {
      if ('matches' in e) {
        setIsMobile(e.matches);
      }
    };
    setIsMobile(mql.matches);
    mql.addEventListener("change", handleResize);
    return () => mql.removeEventListener("change", handleResize);
  }, []);

  // 모바일에서 라우트 혹은 해시 변경 시 메뉴 자동 닫기
  useEffect(() => {
    if (isMobile) {
      setMenuOpen(false);
    }
  }, [location, isMobile]);

  // 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    if (menuOpen && isMobile) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
          menuRef.current &&
          !menuRef.current.contains(target) &&
          toggleRef.current &&
          !toggleRef.current.contains(target)
        ) {
          setMenuOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [menuOpen, isMobile]);

  const renderNavItems = useCallback(
    () => (
      <NS.NavList role="menu">
        {navItems.map(({ href, label }) => (
          <NS.NavItem key={href}>
            <HashLink
              to={href}
              smooth
              onClick={() => setMenuOpen(false)}
              role="menuitem"
            >
              {label}
            </HashLink>
          </NS.NavItem>
        ))}
      </NS.NavList>
    ),
    [navItems]
  );

  const renderLanguageMenu = useCallback(
    () => (
      <div ref={langMenuRef}>
        <NS.LanguageMenu isOpen={langOpen} role="menu">
          {languageOptions.map(({ code, label }) => (
            <li
              key={code}
              onClick={() => selectLanguage(code)}
              role="menuitem"
              tabIndex={0}
            >
              {label}
            </li>
          ))}
        </NS.LanguageMenu>
      </div>
    ),
    [langOpen, langMenuRef, languageOptions, selectLanguage]
  );

  const renderRightForm = useCallback(
    () => (
      <NS.RightForm>
        <NS.Button>
          <NS.StyledLink to="/app" onClick={() => setMenuOpen(false)}>
            {t.apply}
          </NS.StyledLink>
        </NS.Button>

        <NS.LanguageToggle
          ref={toggleRef}
          onClick={toggleLang}
          aria-haspopup="menu"
          aria-expanded={langOpen}
          aria-label="Select language"
        >
          <GrLanguage />
        </NS.LanguageToggle>

        {isMobile && (
          <NS.MobileLang>
            {languageOptions.map(({ code, label }) => (
              <span
                key={code}
                onClick={() => {
                  selectLanguage(code);
                  setMenuOpen(false);
                }}
                role="menuitem"
                tabIndex={0}
                style={{ color: "#fff", padding: "0 5px", cursor: "pointer" }}
              >
                {label}
              </span>
            ))}
          </NS.MobileLang>
        )}

        {renderLanguageMenu()}
      </NS.RightForm>
    ),
    [t, toggleLang, langOpen, isMobile, languageOptions, selectLanguage, renderLanguageMenu]
  );

  return (
    <NS.Nav scrolled={scrolled} role="navigation" aria-label="Main">
      <NS.Logo>
        <img
          src="/logo.png"
          alt="Company Logo"
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
        <NS.AdminBtn onClick={() => navigate('/admin')} />
      </NS.Logo>

      {isMobile ? (
        <>
          <NS.MenuToggle
            ref={toggleRef}
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <FaBars />
          </NS.MenuToggle>

          <NS.NavListContainer ref={menuRef} isOpen={menuOpen}>
            {renderNavItems()}
            {renderRightForm()}
          </NS.NavListContainer>
        </>
      ) : (
        <>
          {renderNavItems()}
          {renderRightForm()}
        </>
      )}
    </NS.Nav>
  );
}