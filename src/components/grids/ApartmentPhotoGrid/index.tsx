import { ApartmentPhotoGridProps } from "../../../types/apartmentComponents";
import "./ApartmentPhotoGrid.scss";

export const ApartmentPhotoGrid = ({
  photos = [],
}: ApartmentPhotoGridProps) => {
  return (
    <>
      {photos.slice(0, 2).map((photo) => (
        <img
          key={photo?.ph_photo}
          src={photo?.ph_url}
          alt={photo?.ph_alt}
          className="photos__photo"
          loading="lazy"
        />
      ))}
    </>
  );
};
