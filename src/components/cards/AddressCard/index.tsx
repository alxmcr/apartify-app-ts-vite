import { useLocationCity } from "../../../hooks/useLocationCity";
import { useLocationNeighborhood } from "../../../hooks/useLocationNeighborhood";
import { useLocationState } from "../../../hooks/useLocationState";
import { AddressCardProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import { ApartmentBreadcrumbs } from "../../pieces/ApartmentBreadcrumbs";
import { ApartmentDetails } from "../../pieces/ApartmentDetails";
import "./AddressCard.scss";

export const AddressCard = ({ apartment }: AddressCardProps) => {
  const { neighborhood, loadingNeighborhood, errorNeighborhood } =
    useLocationNeighborhood(apartment?.ne_neighborhood);
  const { locationState, loadingLocationState, errorLocationState } =
    useLocationState(apartment?.st_state);
  const { city, loadingCity, errorCity } = useLocationCity(apartment?.ci_city);

  if (loadingNeighborhood) return <AppCircleLoader />;
  if (loadingLocationState) return <AppCircleLoader />;
  if (loadingCity) return <AppCircleLoader />;
  if (errorNeighborhood !== null)
    return <p>There was an error with this neighborhood.</p>;
  if (errorLocationState !== null)
    return <p>There was an error with this state.</p>;
  if (errorCity !== null) return <p>There was an error with this city.</p>;

  return (
    <div className="address">
      <ApartmentBreadcrumbs
        locationState={locationState}
        neighborhood={neighborhood}
      />
      <ApartmentDetails
        ap_street_name={apartment?.ap_street_name}
        ap_ext_number={apartment?.ap_ext_number}
        locationState={locationState}
        neighborhood={neighborhood}
        locationCity={city}
      />
    </div>
  );
};
