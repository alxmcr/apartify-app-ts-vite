import "./ScheduleVisitCard.scss";

export const ScheduleVisitCard = () => {
  return (
    <div className="visit">
      <div className="visit__header">
        <p className="visit__cost">
          <span className="visit__label">PRECIO DESCONTADO</span>
          <span className="visit__value">$5,091,100.00</span>
        </p>
        <p className="visit__cost">
          <span className="visit__label">PRECIO DE LISTA</span>
          <span className="visit__value">$5,195,000.00</span>
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
