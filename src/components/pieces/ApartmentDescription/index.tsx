import { ApartmentDescriptionProps } from '../../../@types/apartmentComponents';
import './ApartmentDescription.scss'

export const ApartmentDescription = ({
  description = '',
}: ApartmentDescriptionProps) => {
  return (
    <div className="apartmentdescription">
      <h2 className="apartmentdescription__subtitle">Descripción</h2>
      <p className="apartmentdescription__description">
          {description}
      </p>
    </div>
  );
};
