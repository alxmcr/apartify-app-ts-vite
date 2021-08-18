import { useFeature } from "../../../hooks/useFeature";
import { ApartmentOutdoorProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import "./ApartmentOutdoor.scss";

export const ApartmentOutdoor = ({
  ou_outdoor_space,
  out_value,
}: ApartmentOutdoorProps) => {
  const { feature, errorFeature, loadingFeature } = useFeature(ou_outdoor_space);
  if (loadingFeature) return <AppCircleLoader />;
  if (errorFeature !== null)
    return <p>There was an error with this outdoor space.</p>;

  return (
    <>
      <img
        src={feature?.fe_icon_url}
        alt={feature?.fe_name}
        className="apartmentoutdoor"
      />
      <span className="apartmentoutdoor__name">{out_value}</span>
    </>
  );
};