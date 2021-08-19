import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

export const NotFoundPage = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <Link to="/apartments">Ver otros departmentos.</Link>
    </div>
  );
};
