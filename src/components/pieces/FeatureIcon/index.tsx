import { useAttracts } from "../../../hooks/useAttracts";
import { FeatureIconProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import "./FeatureIcon.scss";

export const FeatureIcon = ({ ap_apartment, feature }: FeatureIconProps) => {
  const { attract, errorAttract, loadingAttract } = useAttracts(
    ap_apartment,
    feature?.fe_feature
  );

  if (loadingAttract) return <AppCircleLoader />;
  if (errorAttract !== null)
    return <p>There was an error with this feature icon.</p>;

  return (
    <>
      <img
        src={feature?.fe_icon_url}
        alt={feature?.fe_name}
        className="featureicon"
      />
      <span className="featureicon__name">0</span>
    </>
  );
};
