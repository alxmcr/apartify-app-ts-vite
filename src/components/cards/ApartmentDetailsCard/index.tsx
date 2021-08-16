import { Link } from "react-router-dom";
import { ApartmentDetailsCardProps } from "../../../types/apartmentComponents";
import { FeatureList } from "../../FeatureList";
import "./ApartmentDetailsCard.scss";

export const ApartmentDetailsCard = ({
  apartment,
}: ApartmentDetailsCardProps) => {
  return (
    <div className="apartmentdetailscard">
      <p className="apartmentdetailscard__breadcumbs">
        <Link to="/" className="apartmentdetailscard__link">
          Propiedades
        </Link>
        <span className="apartmentdetailscard__address">
          {` / ${apartment?.ap_address?.ap_state} / ${apartment?.ap_address?.ap_neighborhood}`}
        </span>
      </p>
      <h1 className="apartmentdetailscard__title">
        <span className="apartmentdetailscard__street">
          {`${apartment?.ap_address?.ap_street_name} ${apartment?.ap_address?.ap_street_number}, `}
        </span>
        <span className="apartmentdetailscard__neighborhood">
          {`${apartment?.ap_address?.ap_neighborhood}, `}
        </span>
        <span className="apartmentdetailscard__city">
          {`${apartment?.ap_address?.ap_city}, `}
        </span>
        <span className="apartmentdetailscard__state">
          {`${apartment?.ap_address?.ap_state}`}
        </span>
      </h1>
      <FeatureList features={apartment?.features} />
    </div>
  );
};
