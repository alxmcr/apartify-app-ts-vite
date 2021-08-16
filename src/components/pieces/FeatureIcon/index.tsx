import { FeatureIconProps } from "../../../types/apartmentComponents";
import "./FeatureIcon.scss";

export const FeatureIcon = ({ feature }: FeatureIconProps) => {
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
