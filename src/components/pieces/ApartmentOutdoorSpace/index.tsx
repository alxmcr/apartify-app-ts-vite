import { useOutdoorSpace } from "../../../hooks/useOutdoorSpace";
import { ApartmentOutdoorProps } from "../../../types/apartmentComponents";

export const ApartmentOutdoorSpace = ({
  ou_outdoor_space = 0,
}: ApartmentOutdoorProps) => {
  const { outdoorSpace, loadingOutdoorSpace, errorOutdoorSpace } =
    useOutdoorSpace(ou_outdoor_space);

  return (
    <div
      className="apartmentoutdoors__outdoorspace"
      key={outdoorSpace?.ou_outdoor_space}
    >
      <span className="apartmentoutdoors__label">{outdoorSpace?.ou_name}:</span>
      <span className="apartmentoutdoors__value">0</span>
    </div>
  );
};
