import { ApartmentPhotoGridProps } from "../../../types/apartmentComponents";
import "./ApartmentPhotoGrid.scss";

export const ApartmentPhotoGrid = ({
  photos = [],
}: ApartmentPhotoGridProps) => {
  return (
    <>
      {photos.map((photo) => (
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
