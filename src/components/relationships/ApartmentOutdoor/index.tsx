import { useOutdoorSpace } from "../../../hooks/useOutdoorSpace";
import { ApartmentOutdoorProps } from "../../../@types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import "./ApartmentOutdoor.scss";

export const ApartmentOutdoor = ({
  ou_outdoor_space,
  out_value,
}: ApartmentOutdoorProps) => {
  const { outdoorSpace, errorOutdoorSpace, loadingOutdoorSpace } =
    useOutdoorSpace(ou_outdoor_space);
  if (loadingOutdoorSpace) return <AppCircleLoader />;
  if (errorOutdoorSpace !== null)
    return <p>There was an error with this outdoor space.</p>;

  return (
    <div className="outdoor">
      <span className="outdoor__label">{outdoorSpace?.ou_name}:</span>
      <span className="outdoor__value">{out_value}</span>
    </div>
  );
};
