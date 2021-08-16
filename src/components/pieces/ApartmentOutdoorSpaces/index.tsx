import { ApartmentOutdoorSpacesProps } from "../../../types/apartmentComponents";
import "./ApartmentOutdoorSpaces.scss";

export const ApartmentOutdoorSpaces = ({
  outdoorSpaces = [],
}: ApartmentOutdoorSpacesProps) => {
  return (
    <div className="apartmentoutdoorspaces">
      <h2 className="apartmentoutdoorspaces__subtitle">Amenidades</h2>
      <div className="apartmentoutdoorspaces__outdoorspaces">
        {outdoorSpaces.map((outdoorSpace) => (
          <div
            className="apartmentoutdoorspaces__outdoorspace"
            key={outdoorSpace?.ou_outdoor_space}
          >
            <span className="apartmentoutdoorspaces__label">
              {outdoorSpace?.ou_name}:
            </span>
            <span className="apartmentoutdoorspaces__value">0</span>
          </div>
        ))}
      </div>
    </div>
  );
};
