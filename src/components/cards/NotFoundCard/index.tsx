import { Link } from "react-router-dom";
import "./NotFoundCard.scss";

export const NotFoundCard = () => {
  return (
    <div className="notfoundcard">
      <h1 className="notfoundcard__title">404</h1>
      <h2 className="notfoundcard__subtitle">Ooops!!</h2>
      <p className="notfoundcard__description">
        Este departmento no existe o no esta disponible.
      </p>
      <Link to="/apartments" className="notfoundcard__link">
        Regresar a departmentos
      </Link>
    </div>
  );
};
