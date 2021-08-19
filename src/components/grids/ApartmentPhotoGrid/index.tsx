import { ApartmentPhotoGridProps } from "../../../types/apartmentComponents";
import "./ApartmentPhotoGrid.scss";

export const ApartmentPhotoGrid = ({
  photos = [],
  ap_url = "",
  ap_alt = "",
}: ApartmentPhotoGridProps) => {
  return (
    <div className="photos">
      <img src={ap_url} alt={ap_alt} className="photos__cover" loading="lazy" />
      <div className="photos__group">
        {photos?.length > 0 ? (
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
        ) : null}
      </div>
    </div>
  );
};
