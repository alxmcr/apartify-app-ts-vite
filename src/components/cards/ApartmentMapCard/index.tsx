import { ApartmentMapCardProps } from "../../../types/apartmentComponents";
import { ApartmentMapMarker } from "../../maps/ApartmentMapMarker";
import "./ApartmentMapCard.scss";

export const ApartmentMapCard = ({
  latitude = 19.451119091716365,
  longitude = -99.15295438729619,
  levelZoom = 15,
}: ApartmentMapCardProps) => {
  return (
    <div className="apartment_map_card">
      <h2 className="apartment_map_card__subtitle">Mapa</h2>
      <ApartmentMapMarker
        latitude={latitude}
        longitude={longitude}
        levelZoom={levelZoom}
      />
    </div>
  );
};
