import { ApartmentInvestmentsCardProps } from "../../../types/apartmentComponents";
import "./ApartmentInvestmentsCard.scss";

export const ApartmentInvestmentsCard = ({
  investments = [],
}: ApartmentInvestmentsCardProps) => {
  return (
    <div className="apartmentinvestmentscard">
      <h2 className="apartmentinvestmentscard__subtitle">Datos de inversión</h2>
      <div className="apartmentinvestmentscard__investments">
        {investments.map((investment) => (
          <div
            className="apartmentinvestmentscard__investment"
            key={investment?.in_investement}
          >
            <img
              src={investment.in_icon}
              alt={investment.in_name}
              className="apartmentinvestmentscard__icon"
            />
            <p className="apartmentinvestmentscard__details">
              <span className="apartmentinvestmentscard__label">
                {investment?.in_name}:
              </span>
              <span className="apartmentinvestmentscard__value">
                {investment?.in_value}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
