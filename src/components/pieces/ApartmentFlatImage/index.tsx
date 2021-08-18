import { ApartmentFlatImageCardProps } from "../../../types/apartmentComponents";
import "./ApartmentFlatImageCard.scss";

export const ApartmentFlatImageCard = ({
  flat,
}: ApartmentFlatImageCardProps) => {
  return (
    <div className="apartmentflatimagecard">
      <h2 className="apartmentfeaturescard__subtitle">Distribución</h2>
      <img
        src={flat.fl_url}
        alt={flat.fl_alt}
        className="apartmentflatimagecard__image"
        loading="lazy"
      />
    </div>
  );
};
