import { useFlats } from "../../../hooks/useFlats";
import { FlatCardProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import "./FlatCard.scss";

export const FlatCard = ({ ap_apartment = 0 }: FlatCardProps) => {
  const { flats, loadingFlats, errorFlats } = useFlats(ap_apartment);

  if (loadingFlats) return <AppCircleLoader />;
  if (errorFlats !== null) return <p>There was an error with this flat.</p>;
  if (flats === null) return null;
  if (flats?.length === 0) return null;

  return (
    <div className="flatcard">
      <h2 className="flatcard__subtitle">Distribución</h2>
      <img
        src={flats[0]?.fl_url}
        alt={flats[0]?.fl_alt}
        className="flatcard__image"
        loading="lazy"
      />
    </div>
  );
};
