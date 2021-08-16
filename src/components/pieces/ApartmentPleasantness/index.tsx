import { ApartmentPleasantnessProps } from '../../../types/apartmentComponents';
import './ApartmentPleasantness.scss'

export const ApartmentPleasantness = ({
  pleasantness = [],
}: ApartmentPleasantnessProps) => {
  return (
    <div className="apartmentpleasantness">
      <h2 className="apartmentpleasantness__subtitle">Amenidades</h2>
      <div className="apartmentpleasantness__pleasantnesses">
        {pleasantness.map((pleasantness) => (
          <div
            className="apartmentpleasantness__pleasantness"
            key={pleasantness?.pl_pleasantness}
          >
            <span className="apartmentpleasantness__label">
              {pleasantness?.pl_name}:
            </span>
            <span className="apartmentpleasantness__value">
              {pleasantness?.pl_value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
