import { NavLink } from "react-router-dom";
import { AppNavProps } from "../../../types/apartmentComponents";
import './AppNav.scss'

export const AppNav = ({ showMenu }: AppNavProps) => {
  const navClassname = showMenu ? 'appnav__nav--show' : 'appnav';

  return (
    <nav className={navClassname}>
      <ul className="appnav__links">
        <li className="appnav__item">
          <NavLink to="#" className="appnav__navlink">
            Vender
          </NavLink>
        </li>
        <li className="appnav__item">
          <NavLink to="/apartments" className="appnav__navlink">
            Comprar
          </NavLink>
        </li>
        <li className="appnav__item">
          <NavLink to="#" className="appnav__navlink">
            Crédito
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
