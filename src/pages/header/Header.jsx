import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    const handleScroll = () => {
      const mainHeaderArea = document.querySelector('.main-header-area');
      if (mainHeaderArea) {
        setIsSticky(window.scrollY > mainHeaderArea.offsetTop);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen({
      ...submenuOpen,
      [index]: !submenuOpen[index],
    });
  };

  return (
    <header className="site-header header-area">
      <div className="topbar-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-left">
              <div className="left-topbar">
                <ul>
                  <li>Opening Time : 10:00 AM – 7:00 PM</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 text-right">
              <div className="top-social">
                <a href="https://www.facebook.com/MonirGroup2022/" className="fa fa-facebook-f" />
                <a href="#" className="fa fa-twitter" />
                <a href="#" className="fa fa-linkedin" />
                <a href="#" className="fa fa-pinterest" />
                <a href="#" className="fa fa-google-plus-g"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`main-header-area ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <div className="second-logo">
                <Link to="/">
                  <img src="assets/img/mg-logo/monir-group.jpg" width={90} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-10 col-md-10">
              <div id="cssmenu" className={isSmallScreen ? 'small-screen' : ''}>
                <div
                  id="menu-button"
                  className={menuOpen ? 'menu-opened' : ''}
                  onClick={toggleMenu}>
                </div>
                <ul className={menuOpen ? 'open' : ''}>
                  <li>
                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>HOME</NavLink>
                  </li>
                  <li className="has-sub">
                    <NavLink to="#" onClick={closeMenu} className={({ isActive }) => isActive ? '' : ''}>ABOUT US</NavLink>
                    <span className="submenu-button" onClick={() => toggleSubmenu(0)}></span>
                    <ul className={submenuOpen[0] ? 'open' : ''}>
                      <li><NavLink to="/CompanyProfile" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>COMPANY PROFILE</NavLink></li>
                      <li><NavLink to="/founder-legacy" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>FOUNDER'S LEGACY</NavLink></li>
                      <li><NavLink to="/mission-vision" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Mission Vision</NavLink></li>
                      <li><NavLink to="/management" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>MANAGEMENT</NavLink></li>
                    </ul>
                  </li>
                  <li className="has-sub">
                    <NavLink to="#" onClick={closeMenu} className={({ isActive }) => isActive ? '' : ''}>BUSINESS UNITS</NavLink>
                    <span className="submenu-button" onClick={() => toggleSubmenu(1)}></span>
                    <ul className= {submenuOpen[1] ? 'open' : 'scroll'}>
                      <li><NavLink to="/travel-sheba" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>TRAVEL SHEBA LIMITED</NavLink></li>
                      <li><NavLink to="/it-sheba" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>IT SHEBA LIMITED</NavLink></li>
                      <li><NavLink to="/hosting-sheba" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>HOSTING SHEBA 24</NavLink></li>
                      <li><NavLink to="/muskan-holidays" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>MUSKAN HOLIDAYS</NavLink></li>
                      <li><NavLink to="/monir-travels" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>MONIR TRAVELS LLC</NavLink></li>
                      <li><NavLink to="/capital-news" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>CAPITAL NEWS 24</NavLink></li>
                      <li><NavLink to="/fardin-branding" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>FARDIN BRANDING ZONE</NavLink></li>
                      <li><NavLink to="/ekota-mart" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>EKOTA MART</NavLink></li>
                      <li><NavLink to="/new-vision-consultancy" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>NEW VISION CONSULTANCY</NavLink></li>
                      <li><NavLink to="/amanot-travels" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>AMANOT TRAVELS INTERNATIONAL</NavLink></li>
                      <li><NavLink to="/umrah-sheba" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>UMRAH SHEBA</NavLink></li>
                      <li><NavLink to="/faijan-rent" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>FAIJAN RENT A CAR</NavLink></li>
                      
                    </ul>
                  </li>
                  <li><NavLink to="/document" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>DOCUMENT</NavLink></li>
                  <li className="has-sub">
                    <NavLink to="#" onClick={closeMenu} className={({ isActive }) => isActive ? '' : ''}>MEDIA</NavLink>
                    <span className="submenu-button" onClick={() => toggleSubmenu(2)}></span>
                    <ul className={submenuOpen[2] ? 'open' : ''}>
                      <li><NavLink to="/video-gallery" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>VIDEO GALLERY</NavLink></li>
                      <li><NavLink to="/photo-gallery" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>PHOTO GALLERY</NavLink></li>
                      <li><NavLink to="/notice-board" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>NOTICE BOARD</NavLink></li>
                      <li><NavLink to="/career" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>CAREER</NavLink></li>
                    </ul>
                  </li>
                  <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>CONTACT</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
