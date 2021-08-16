import { ApartmentFeaturesProps } from '../../../types/apartmentComponents';
import './ApartmentFeatures.scss'

export const ApartmentFeatures = ({
  features,
}: ApartmentFeaturesProps) => {
  return (
    <div className="apartmentfeatures">
      <h2 className="apartmentfeatures__subtitle">Características</h2>
      <div className="apartmentfeatures__features">
        {features.map((feature) => (
          <div
            className="apartmentfeatures__feature"
            key={feature?.fe_feature}
          >
            <span className="apartmentfeatures__label">
              {feature?.fe_name}:
            </span>
            <span className="apartmentfeatures__value">
              0
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
