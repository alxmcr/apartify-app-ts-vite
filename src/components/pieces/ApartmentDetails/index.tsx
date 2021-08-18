import { useLocationCity } from "../../../hooks/useLocationCity";
import { useLocationNeighborhood } from "../../../hooks/useLocationNeighborhood";
import { useLocationState } from "../../../hooks/useLocationState";
import { ApartmentDetailsProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import "./ApartmentDetails.scss";

export const ApartmentDetails = ({
  ap_street_name = "",
  ap_ext_number = "",
  ne_neighborhood = 0,
  st_state = 0,
  ci_city = 0,
}: ApartmentDetailsProps) => {
  const { neighborhood, loadingNeighborhood, errorNeighborhood } =
    useLocationNeighborhood(ne_neighborhood);
  const { locationState, loadingLocationState, errorLocationState } =
    useLocationState(st_state);
  const { city, loadingCity, errorCity } = useLocationCity(ci_city);

  if (loadingNeighborhood) return <AppCircleLoader />;
  if (loadingLocationState) return <AppCircleLoader />;
  if (loadingCity) return <AppCircleLoader />;
  if (errorNeighborhood !== null)
    return <p>There was an error with this neighborhood.</p>;
  if (errorLocationState !== null)
    return <p>There was an error with this state.</p>;
  if (errorCity !== null) return <p>There was an error with this city.</p>;

  return (
    <div className="apartmentdetails">
      <h1 className="apartmentdetails__title">
        <span className="apartmentdetails__street">
          {`${ap_street_name} ${ap_ext_number}, `}
        </span>
        {neighborhood !== null ? (
          <>
            <span className="apartmentdetails__neighborhood">
              {`${neighborhood?.ne_name}, `}
            </span>
            <span className="apartmentdetails__city">{`${city?.ci_name}, `}</span>
            <span className="apartmentdetails__state">
              {`${locationState?.st_name}`}
            </span>
          </>
        ) : null}
      </h1>
    </div>
  );
};
