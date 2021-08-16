import { Link } from "react-router-dom";
import { ApartmentBreadcrumbsProps } from "../../../types/apartmentComponents";

export const ApartmentBreadcrumbs = ({
  state,
  neighborhood,
}: ApartmentBreadcrumbsProps) => {
  return (
    <p className="breadcumbs">
      <Link to="/" className="breadcumbs__link">
        Propiedades
      </Link>
      <span className="breadcumbs__address">
        {` / ${state?.st_name} / ${neighborhood?.ne_name}`}
      </span>
    </p>
  );
};
