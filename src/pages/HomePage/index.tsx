import { useHistory } from "react-router-dom";
import "./HomePage.scss";

export const HomePage = () => {
  const history = useHistory();
  const buyYourApartment = () => history.push("/apartments");

  return (
    <div className="home">
      <img
        src="https://res.cloudinary.com/images-alex-projects/image/upload/v1628134664/Portfolio/appartify-assets/svg/quite-town_zvewu8.svg"
        alt="Building with apartments"
        className="home__image"
        loading="lazy"
      />
      <div className="home__column">
        <h1 className="home__phrase">
          Encuentra el departamento de tus sueños.
        </h1>
        <p className="home__message">
          Disfruta la búsqueda del departamento que siempre quisiste, de un forma
          fácil, cómoda y rápida. Cómpralo con
          <span className="home__nameapp">{` Apartify.`}</span>
        </p>
        <button
          className="home__button home__button--cta"
          onClick={buyYourApartment}
        >
          Compra tu departmento
        </button>
      </div>
    </div>
  );
};
