import { useHistory } from "react-router-dom";
import { ApartmentCardProps } from "../../../types/apartmentComponents";
import { FeatureList } from "../../FeatureList";
import "./ApartmentCard.scss";

export const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  const history = useHistory();
  const redirectToApartPage = () =>
    history.push(`/apartments/${apartment.ap_apartment}`);
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
        <p className="apartmentcard__address">
          <span className="apartmentcard__neighborhood">
            {apartment?.ap_address?.ap_neighborhood}
          </span>
          <span className="apartmentcard__street">
            {`, ${apartment?.ap_address?.ap_street_name} ${apartment?.ap_address?.ap_street_number}`}
          </span>
        </p>
        <FeatureList features={apartment?.features} />
      </div>
    </div>
  );
};
