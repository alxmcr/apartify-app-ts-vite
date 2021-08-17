import { FeatureListProps } from "../../../types/apartmentComponents";
import { FeatureIcon } from "../../pieces/FeatureIcon";
import "./FeatureList.scss";

export const FeatureList = ({
  ap_apartment = 0,
  features = [],
}: FeatureListProps) => {
  if (features?.length === 0)
    return (
      <p className="features__message">There is not an feature registered.</p>
    );

  return (
    <ul className="features">
      {features.map((feature) => (
        <li className="features__item" key={feature?.fe_feature}>
          {feature?.fe_is_in_card ? (
            <FeatureIcon
              ap_apartment={ap_apartment}
              key={feature?.fe_feature}
              feature={feature}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
};
