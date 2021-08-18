import { Link } from "react-router-dom";
import { useLocationNeighborhood } from "../../../hooks/useLocationNeighborhood";
import { useLocationState } from "../../../hooks/useLocationState";
import { ApartmentBreadcrumbsProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";

export const ApartmentBreadcrumbs = ({
  ne_neighborhood = 0,
  st_state = 0,
}: ApartmentBreadcrumbsProps) => {
  const { neighborhood, loadingNeighborhood, errorNeighborhood } =
    useLocationNeighborhood(ne_neighborhood);
  const { locationState, loadingLocationState, errorLocationState } =
    useLocationState(st_state);

  if (loadingNeighborhood) return <AppCircleLoader />;
  if (loadingLocationState) return <AppCircleLoader />;
  if (errorNeighborhood !== null)
    return <p>There was an error with this neighborhood.</p>;
  if (errorLocationState !== null)
    return <p>There was an error with this state.</p>;

  return (
    <p className="breadcumbs">
      <Link to="/apartments" className="breadcumbs__link">
        Propiedades
      </Link>
      <span className="breadcumbs__address">
        {` / ${locationState?.st_name} / ${neighborhood?.ne_name}`}
      </span>
    </p>
  );
};
