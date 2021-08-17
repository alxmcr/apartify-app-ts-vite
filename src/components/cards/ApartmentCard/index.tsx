import { useHistory } from "react-router-dom";
import { useAttracts } from "../../../hooks/useAttracts";
import { useLocationNeighborhood } from "../../../hooks/useLocationNeighborhood";
import { ApartmentCardProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import { ApartmentAttractList } from "../../groups/ApartmentAttractList";
import { ApartmentAddress } from "../../pieces/ApartmentAddress";

import "./ApartmentCard.scss";

export const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  const { neighborhood, loadingNeighborhood, errorNeighborhood } =
    useLocationNeighborhood(apartment.ne_neighborhood);
  const { attracts, errorAttracts, loadingAttracts } = useAttracts(
    apartment?.ap_apartment
  );

  const history = useHistory();
  const redirectToApartPage = () =>
    history.push(`/apartments/${apartment.ap_apartment}`);

  if (loadingNeighborhood) return <AppCircleLoader />;
  if (loadingAttracts) return <AppCircleLoader />;
  if (errorAttracts !== null)
    return <p>There was an error with this feature list.</p>;
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
        {!loadingNeighborhood ? (
          <ApartmentAddress
            ap_street_name={apartment.ap_street_name}
            ap_ext_number={apartment.ap_ext_number}
            neighborhood={neighborhood}
          />
        ) : null}
        <ApartmentAttractList attracts={attracts} />
      </div>
    </div>
  );
};
