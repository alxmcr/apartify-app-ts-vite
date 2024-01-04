import { Link } from "react-router-dom";
import { ApartmentBreadcrumbsProps } from "../../../@types/apartmentComponents";
import './ApartmentBreadcrumbs.scss'

export const ApartmentBreadcrumbs = ({
  neighborhood,
  locationState,
}: ApartmentBreadcrumbsProps) => {
  return (
    <p className="breadcumbs">
      <Link to="/apartments" className="breadcumbs__link">
        Propiedades
      </Link>
      <span className="breadcumbs__address">
        {`  /  ${locationState?.st_name}  /  ${neighborhood?.ne_name}`}
      </span>
    </p>
  );
};
