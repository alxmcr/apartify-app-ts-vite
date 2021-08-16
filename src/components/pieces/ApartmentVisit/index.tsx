import './ApartmentVisit.scss'

export const ApartmentVisit = () => {
  return (
    <div className="apartmentvisit">
      <div className="apartmentvisit__header">
        <p className="apartmentvisit__cost">
          <span className="apartmentvisit__label">PRECIO DESCONTADO</span>
          <span className="apartmentvisit__value">$5,091,100.00</span>
        </p>
        <p className="apartmentvisit__cost">
          <span className="apartmentvisit__label">PRECIO DE LISTA</span>
          <span className="apartmentvisit__value">$5,195,000.00</span>
        </p>
      </div>
      <div className="apartmentvisit__body">
        <p className="apartmentvisit__invitation">¿Quieres conocerlo?</p>
        <button className="apartmentvisit__button">
          Agenda una visita
        </button>
      </div>
      <div className="apartmentvisit__footer">
        <p className="apartmentvisit__message">
          ¡Es gratis y sin compromisos!
        </p>
      </div>
    </div>
  );
};
