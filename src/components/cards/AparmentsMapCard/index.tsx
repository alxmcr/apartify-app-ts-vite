import { AparmentsMapCardProps } from "../../../@types/apartmentComponents";
import { AparmentMarkersMap } from "../../maps/AparmentMarkersMap";
import "./AparmentsMapCard.scss";

export const AparmentsMapCard = ({
  defaultLatitude = 19.451119091716365,
  defaultLongitude = -99.15295438729619,
  levelZoom = 13,
  apartments = [],
}: AparmentsMapCardProps) => {
  return (
    <div className="apartments_map_card">
      <AparmentMarkersMap
        defaultLatitude={defaultLatitude}
        defaultLongitude={defaultLongitude}
        levelZoom={levelZoom}
        apartments={apartments}
      />
    </div>
  );
};
