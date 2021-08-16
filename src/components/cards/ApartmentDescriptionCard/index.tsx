import { ApartmentDescriptionCardProps } from '../../../types/apartmentComponents';
import './ApartmentDescriptionCard.scss'

export const ApartmentDescriptionCard = ({
  description = '',
}: ApartmentDescriptionCardProps) => {
  return (
    <div className="apartmentdescriptioncard">
      <h2 className="apartmentdescriptioncard__subtitle">Descripción</h2>
      <p className="apartmentdescriptioncard__description">
          {description}
      </p>
    </div>
  );
};
