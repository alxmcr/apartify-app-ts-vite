import { FeatureListProps } from "../../../types/apartmentComponents";
import { FeatureIcon } from "../../pieces/FeatureIcon";
import "./FeatureList.scss";

export const FeatureList = ({ features = [] }: FeatureListProps) => {
  if (features?.length === 0)
    return (
      <p className="features__message">There is not an feature registered.</p>
    );

  return (
    <ul className="features">
      {features.map((feature) => (
        <li className="features__item" key={feature?.fe_feature}>
          <FeatureIcon key={feature?.fe_feature} feature={feature} />
        </li>
      ))}
    </ul>
  );
};
