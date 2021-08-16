import { ApartmentFeaturesCardProps } from '../../../types/apartmentComponents';
import './ApartmentFeaturesCard.scss'

export const ApartmentFeaturesCard = ({
  features,
}: ApartmentFeaturesCardProps) => {
  return (
    <div className="apartmentfeaturescard">
      <h2 className="apartmentfeaturescard__subtitle">Características</h2>
      <div className="apartmentfeaturescard__features">
        {features.map((feature) => (
          <div
            className="apartmentfeaturescard__feature"
            key={feature?.fe_feature}
          >
            <span className="apartmentfeaturescard__label">
              {feature?.fe_name}:
            </span>
            <span className="apartmentfeaturescard__value">
              {feature?.fe_value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
