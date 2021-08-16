import { ApartmentPleasantnessCardProps } from '../../../types/apartmentComponents';
import './ApartmentPleasantnessCard.scss'

export const ApartmentPleasantnessCard = ({
  pleasantness = [],
}: ApartmentPleasantnessCardProps) => {
  return (
    <div className="apartmentpleasantnesscard">
      <h2 className="apartmentpleasantnesscard__subtitle">Amenidades</h2>
      <div className="apartmentpleasantnesscard__pleasantnesses">
        {pleasantness.map((pleasantness) => (
          <div
            className="apartmentpleasantnesscard__pleasantness"
            key={pleasantness?.pl_pleasantness}
          >
            <span className="apartmentpleasantnesscard__label">
              {pleasantness?.pl_name}:
            </span>
            <span className="apartmentpleasantnesscard__value">
              {pleasantness?.pl_value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
