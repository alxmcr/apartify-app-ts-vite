import { usePhotos } from "../../../hooks/usePhotos";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import { ApartmentPhotoGrid } from "../../grids/ApartmentPhotoGrid";
import "./ApartmentPhotoSection.scss";

export interface ApartmentPhotoSectionProps {
  ap_apartment: number | undefined;
  ap_url: string | undefined;
  ap_alt: string | undefined;
}

export const ApartmentPhotoSection = ({
  ap_apartment = 0,
  ap_url = "",
  ap_alt = "",
}: ApartmentPhotoSectionProps) => {
  const { photos, loadingPhotos, errorPhotos } = usePhotos(ap_apartment);

  if (loadingPhotos) return <AppCircleLoader />;
  if (errorPhotos !== null) return <p>There was an error with some photos.</p>;

  return (
    <>
      {photos !== null ? (
        <section>
          <ApartmentPhotoGrid photos={photos} ap_url={ap_url} ap_alt={ap_alt} />
        </section>
      ) : null}
    </>
  );
};
