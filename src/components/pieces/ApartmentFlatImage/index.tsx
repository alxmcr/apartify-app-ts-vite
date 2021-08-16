import { ApartmentFlatImageCardProps } from "../../../types/apartmentComponents";
import "./ApartmentFlatImageCard.scss"

export const ApartmentFlatImageCard = ({
  flat_image,
}: ApartmentFlatImageCardProps) => {
  return (
    <div className="apartmentflatimagecard">
      <h2 className="apartmentfeaturescard__subtitle">Distribución</h2>
      <img
        src={flat_image.fl_url_image}
        alt={flat_image.fl_url_image}
        className="apartmentflatimagecard__image"
      />
    </div>
  );
};
