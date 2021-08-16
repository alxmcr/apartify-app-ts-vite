import { ApartmentInvestmentsProps } from "../../../types/apartmentComponents";
import "./ApartmentInvestments.scss";

export const ApartmentInvestments = ({
  investments = [],
}: ApartmentInvestmentsProps) => {
  return (
    <div className="apartmentinvestments">
      <h2 className="apartmentinvestments__subtitle">Datos de inversión</h2>
      <div className="apartmentinvestments__investments">
        {investments.map((investment) => (
          <div
            className="apartmentinvestments__investment"
            key={investment?.in_investement}
          >
            <img
              src={investment.in_icon}
              alt={investment.in_name}
              className="apartmentinvestments__icon"
            />
            <p className="apartmentinvestments__details">
              <span className="apartmentinvestments__label">
                {investment?.in_name}:
              </span>
              <span className="apartmentinvestments__value">
                {investment?.in_value}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
