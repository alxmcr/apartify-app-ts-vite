import { usePhotos } from "../../../hooks/usePhotos";
import { ApartmentPhotoGridProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import "./ApartmentPhotoGrid.scss";

export const ApartmentPhotoGrid = ({
  ap_apartment = 0,
  ap_url = "",
  ap_alt = "",
}: ApartmentPhotoGridProps) => {
  const { photos, loadingPhotos, errorPhotos } = usePhotos(ap_apartment);

  if (ap_url === null) return null;
  if (ap_alt === null) return null;
  if (loadingPhotos) return <AppCircleLoader />;
  if (errorPhotos !== null) return <p>There was an error with some photos.</p>;

  return (
    <div className="photos">
      <img src={ap_url} alt={ap_alt} className="photos__cover" loading="lazy" />
      <div className="photos__group">
        {photos.map((photo) => (
          <img
            key={photo?.ph_photo}
            src={photo?.ph_url}
            alt={photo?.ph_alt}
            className="photos__photo"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};
