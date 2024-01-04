import { ScheduleVisitCardProps } from "../../../@types/apartmentComponents";
import "./ScheduleVisitCard.scss";

export const ScheduleVisitCard = ({
  ap_cost_offer,
  ap_cost_list,
}: ScheduleVisitCardProps) => {
  return (
    <div className="visit">
      <div className="visit__header">
        <p className="visit__cost">
          <span className="visit__label">PRECIO DESCONTADO</span>
          <span className="visit__value visit__value--offer">{ap_cost_offer}</span>
        </p>
        <p className="visit__cost">
          <span className="visit__label">PRECIO DE LISTA</span>
          <span className="visit__value visit__value--list">{ap_cost_list}</span>
        </p>
      </div>
      <div className="visit__body">
        <p className="visit__invitation">¿Quieres conocerlo?</p>
        <button className="visit__button">Agenda una visita</button>
      </div>
      <div className="visit__footer">
        <p className="visit__message">¡Es gratis y sin compromisos!</p>
      </div>
    </div>
  );
};
