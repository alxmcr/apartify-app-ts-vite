import './ApartmentVisitCard.scss'

export const ApartmentVisitCard = () => {
  return (
    <div className="apartmentvisitcard">
      <div className="apartmentvisitcard__header">
        <p className="apartmentvisitcard__cost">
          <span className="apartmentvisitcard__label">PRECIO DESCONTADO</span>
          <span className="apartmentvisitcard__value">$5,091,100.00</span>
        </p>
        <p className="apartmentvisitcard__cost">
          <span className="apartmentvisitcard__label">PRECIO DE LISTA</span>
          <span className="apartmentvisitcard__value">$5,195,000.00</span>
        </p>
      </div>
      <div className="apartmentvisitcard__body">
        <p className="apartmentvisitcard__invitation">¿Quieres conocerlo?</p>
        <button className="apartmentvisitcard__button">
          Agenda una visita
        </button>
      </div>
      <div className="apartmentvisitcard__footer">
        <p className="apartmentvisitcard__message">
          ¡Es gratis y sin compromisos!
        </p>
      </div>
    </div>
  );
};
