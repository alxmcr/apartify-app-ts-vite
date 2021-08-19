import { DescriptionCardProps } from "../../../types/apartmentComponents";
import "./DescriptionCard.scss";

export const DescriptionCard = ({ description = "" }: DescriptionCardProps) => {
  return (
    <div className="description_card">
      <h2 className="description_card__subtitle">Descripción</h2>
      <p className="description_card__description">{description}</p>
    </div>
  );
};
