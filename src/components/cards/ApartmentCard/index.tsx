import { useHistory } from "react-router-dom";
import { useLocationNeighborhood } from "../../../hooks/useLocationNeighborhood";
import { ApartmentCardProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import { FeatureList } from "../../lists/FeatureList";
import { ApartmentAddress } from "../../pieces/ApartmentAddress";

import "./ApartmentCard.scss";

export const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  const { neighborhood, loadingNeighborhood, errorNeighborhood } =
    useLocationNeighborhood(apartment.ne_neighborhood);
  const history = useHistory();
  const redirectToApartPage = () =>
    history.push(`/apartments/${apartment.ap_apartment}`);

  if (loadingNeighborhood) return <AppCircleLoader />;
  if (errorNeighborhood !== null)
    return <p>There was an error with this neighborhood.</p>;

  return (
    <div
      className="apartmentcard"
      id={`${apartment?.ap_apartment}`}
      onClick={redirectToApartPage}
    >
      <div className="apartmentcard__body">
        <img
          src={apartment?.ap_url}
          alt={apartment?.ap_alt}
          className="apartmentcard__image"
          loading="lazy"
        />
      </div>
      <div className="apartmentcard__footer">
        <p className="apartmentcard__cost">
          <span className="apartmentcard__cost--offer">
            {apartment?.ap_cost_offer}
          </span>
          <span className="apartmentcard__cost--list">
            {apartment?.ap_cost_offer}
          </span>
        </p>
        <ApartmentAddress
          ap_street_name={apartment.ap_street_name}
          ap_ext_number={apartment.ap_ext_number}
          neighborhood={neighborhood}
        />
        <FeatureList features={apartment?.features} />
      </div>
    </div>
  );
};
