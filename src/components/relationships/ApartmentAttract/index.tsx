import { useFeature } from "../../../hooks/useFeature";
import { ApartmentAttractProps } from "../../../@types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import "./ApartmentAttract.scss";

export const ApartmentAttract = ({
  fe_feature,
  att_value,
}: ApartmentAttractProps) => {
  const { feature, errorFeature, loadingFeature } = useFeature(fe_feature);
  if (loadingFeature) return <AppCircleLoader />;
  if (errorFeature !== null)
    return <p>There was an error with this feature.</p>;

  return (
    <div className="attract">
      <span className="attract__label">{feature?.fe_name}:</span>
      <span className="attract__value">{att_value}</span>
    </div>
  );
};
