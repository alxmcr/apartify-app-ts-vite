import { useFeature } from "../../../hooks/useFeature";
import { ApartmentAttractProps } from "../../../types/apartmentComponents";
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
    <>
      <img
        src={feature?.fe_icon_url}
        alt={feature?.fe_name}
        className="apartmentattract"
      />
      <span className="apartmentattract__name">{att_value}</span>
    </>
  );
};
