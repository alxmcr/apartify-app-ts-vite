import { useFeature } from "../../../hooks/useFeature";
import { ApartmentAttractIconProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import "./ApartmentAttractIcon.scss";

export const ApartmentAttractIcon = ({
  fe_feature,
  att_value,
}: ApartmentAttractIconProps) => {
  const { feature, errorFeature, loadingFeature } = useFeature(fe_feature);
  if (loadingFeature) return <AppCircleLoader />;
  if (errorFeature !== null)
    return <p>There was an error with this feature.</p>;

  return (
    <div className="attracticon">
      <img
        src={feature?.fe_icon_url}
        alt={feature?.fe_name}
        className="attracticon__icon"
        loading="lazy"
      />
      <span className="attracticon__name">{att_value}</span>
    </div>
  );
};
