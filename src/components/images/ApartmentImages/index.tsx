import { ApartmentImagesProps } from "../../../types/apartmentComponents";
import { Photo } from "../../../types/apartmentTypes";
import "./ApartmentImages.scss";

export const ApartmentImages = ({
  cover,
  images = [],
}: ApartmentImagesProps) => {
  return (
    <div className="apartmentimages">
      <img
        src={cover?.ph_url}
        alt={cover?.ph_alt}
        className="apartmentimages__cover"
      />
      <div className="apartmentimages__photos">
        {images?.map((image: Photo) => (
          <img
            src={image?.ph_url}
            alt={image?.ph_alt}
            className="apartmentimages__photo"
            key={image?.ph_photo}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};
