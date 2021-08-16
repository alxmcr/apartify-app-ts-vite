import { ApartmentAddressProps } from "../../../types/apartmentComponents";

export const ApartmentAddress = ({ apartment }: ApartmentAddressProps) => {
  return (
    <p className="address">
      <span className="address__neighborhood">
        {apartment?.ap_address?.ap_neighborhood}
      </span>
      <span className="address__street">
        {`, ${apartment?.ap_address?.ap_street_name} ${apartment?.ap_address?.ap_street_number}`}
      </span>
    </p>
  );
};
