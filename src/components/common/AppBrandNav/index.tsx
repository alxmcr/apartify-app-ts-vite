import { NavLink } from "react-router-dom";
import { AppBrandNavProps } from "../../../types/apartmentComponents";
import "./AppBrandNav.scss";

export const AppBrandNav = ({ showMenu, setShowMenu }: AppBrandNavProps) => {
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);
  return (
    <div className="appbrandnav">
      <div className="appbrandnav__brand">
        <NavLink to="/" className="appbrandnav__link appbrandnav__link--logo">
          <img
            src="https://res.cloudinary.com/images-alex-projects/image/upload/v1628047381/Portfolio/appartify-assets/svg/apartments-red_oevads.svg"
            alt="Appartify"
            className="appbrandnav__logo"
            loading="lazy"
          />
        </NavLink>
        <NavLink to="/" className="appbrandnav__link appbrandnav__link--name">
          <h2 className="appbrandnav__name">Apartify</h2>
        </NavLink>
      </div>
      <div className="appbrandnav__icons">
        <button
          className={`appbrandnav__button brandnav__button--close ${
            showMenu ? "show" : "hide"
          }`}
          onClick={closeMenu}
        >
          <img
            src="https://res.cloudinary.com/images-alex-projects/image/upload/v1628050333/Portfolio/appartify-assets/svg/do-not-cross_blcgzw.svg"
            alt="Close Menu"
            aria-label="X Button - Close Menu"
            className="appbrandnav__icon appbrandnav__icon--close"
            loading="lazy"
          />
        </button>
        <button
          className={`appbrandnav__button brandnav__button--open ${
            showMenu ? "hide" : "show"
          }`}
          onClick={openMenu}
        >
          <img
            src="https://res.cloudinary.com/images-alex-projects/image/upload/v1628050333/Portfolio/appartify-assets/svg/menu-hamburger_wmzw92.svg"
            alt="Menu"
            aria-label="Hamburger Button - Open Menu"
            className="appbrandnav__icon appbrandnav__icon--open"
            loading="lazy"
          />
        </button>
      </div>
    </div>
  );
};
