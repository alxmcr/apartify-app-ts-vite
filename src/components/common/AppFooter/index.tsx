import { NavLink } from "react-router-dom";
import "./AppFooter.scss";

export const AppFooter = () => {
  return (
    <footer className="appfooter">
      <div className="appfooter__brand">
        <NavLink to="/" className="appfooter__navlink appfooter__link--logo">
          <img
            src="https://res.cloudinary.com/images-alex-projects/image/upload/v1628047381/Portfolio/appartify-assets/svg/apartments-red_oevads.svg"
            alt="Appartify"
            className="appfooter__logo"
          />
        </NavLink>
        <h2 className="appfooter__name">Apartify</h2>
      </div>
      <div className="appfooter__columns">
        <div className="appfooter__column">
          <h3 className="appfooter__subtitle">Compañía</h3>
          <ul className="appfooter__links">
            <li className="appfooter__item">
              <a href="/" className="appfooter__link">
                Valores
              </a>
            </li>
            <li className="appfooter__item">
              <a href="/" className="appfooter__link">
                Cultura
              </a>
            </li>
            <li className="appfooter__item">
              <a href="/" className="appfooter__link">
                Blog
              </a>
            </li>
            <li className="appfooter__item">
              <a href="/" className="appfooter__link">
                Sé parte de Apartify
              </a>
            </li>
          </ul>
        </div>
        <div className="appfooter__column">
          <h3 className="appfooter__subtitle">Legal</h3>
          <ul className="appfooter__links">
            <li className="appfooter__item">
              <a href="/" className="appfooter__link">
                Términos y Condiciones
              </a>
            </li>
            <li className="appfooter__item">
              <a href="/" className="appfooter__link">
                Aviso de Privacidad
              </a>
            </li>
          </ul>
        </div>
        <div className="appfooter__column">
          <h3 className="appfooter__subtitle">Ayuda</h3>
          <ul className="appfooter__links">
            <li className="appfooter__item">
              <a href="/" className="appfooter__link">
                Preguntas frecuentes
              </a>
            </li>
            <li className="appfooter__item">
              <a href="/" className="appfooter__link">
                77 3698 1456
              </a>
            </li>
          </ul>
        </div>
        <div className="appfooter__column">
          <h3 className="appfooter__subtitle">Accesos directos</h3>
          <ul className="appfooter__links">
            <li className="appfooter__item">
              <a href="/" className="appfooter__link">
                Quiero comprar una propiedad
              </a>
            </li>
            <li className="appfooter__item">
              <a href="/" className="appfooter__link">
                Quiero vender mi propiedad
              </a>
            </li>
            <li className="appfooter__item">
              <a href="/" className="appfooter__link">
                Ver todas las propiedades
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
