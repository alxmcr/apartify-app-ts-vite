import { Link } from "react-router-dom";
import { ApartmentDetailsProps } from "../../../types/apartmentComponents";
import { FeatureList } from "../../FeatureList";
import "./ApartmentDetails.scss";

export const ApartmentDetails = ({
  apartment,
}: ApartmentDetailsProps) => {
  return (
    <div className="apartmentdetails">
      <p className="apartmentdetails__breadcumbs">
        <Link to="/" className="apartmentdetails__link">
          Propiedades
        </Link>
        <span className="apartmentdetails__address">
          {` / ${apartment?.ap_address?.ap_state} / ${apartment?.ap_address?.ap_neighborhood}`}
        </span>
      </p>
      <h1 className="apartmentdetails__title">
        <span className="apartmentdetails__street">
          {`${apartment?.ap_address?.ap_street_name} ${apartment?.ap_address?.ap_street_number}, `}
        </span>
        <span className="apartmentdetails__neighborhood">
          {`${apartment?.ap_address?.ap_neighborhood}, `}
        </span>
        <span className="apartmentdetails__city">
          {`${apartment?.ap_address?.ap_city}, `}
        </span>
        <span className="apartmentdetails__state">
          {`${apartment?.ap_address?.ap_state}`}
        </span>
      </h1>
      <FeatureList features={apartment?.features} />
    </div>
  );
};
