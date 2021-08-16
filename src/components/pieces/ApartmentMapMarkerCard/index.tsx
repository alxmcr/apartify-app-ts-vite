import { ApartmentMapMarkerCardProps } from "../../../types/apartmentComponents";
import { ApartmentMapMarker } from "../../maps/ApartmentMapMarker";

export const ApartmentMapMarkerCard = ({
  coordinates,
}: ApartmentMapMarkerCardProps) => {
  return (
    <div className="apartmentmapmarkercard">
      <h2 className="apartmentmapmarkercard__subtitle">Mapa</h2>
      <ApartmentMapMarker
        latitude={coordinates?.geo_latitude}
        longitude={coordinates?.geo_longitude}
        levelZoom={15}
      />
    </div>
  );
};
