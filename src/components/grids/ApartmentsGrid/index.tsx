import { ApartmentsGridProps } from "../../../types/apartmentComponents";
import { ApartmentCard } from "../../cards/ApartmentCard";
import "./ApartmentsGrid.scss";

export const ApartmentsGrid = ({ apartments = [] }: ApartmentsGridProps) => {
  return (
    <div className="apartments">
      {apartments.length > 0 ? (
        <>
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.ap_apartment} apartment={apartment} />
          ))}
        </>
      ) : <p>Lo sentimos, no hay apartmentos registrados.</p>}
    </div>
  );
};
