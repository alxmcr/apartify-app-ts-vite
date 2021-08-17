import { ApartmentAddressProps } from "../../../types/apartmentComponents";

export const ApartmentAddress = ({
  ap_street_name = "",
  ap_ext_number = "",
  neighborhood,
}: ApartmentAddressProps) => {
  console.log("ApartmentAddress - neighborhood",  { neighborhood });
  return (
    <p className="address">
      {neighborhood !== null ? (
        <span className="address__neighborhood">{neighborhood?.ne_name}</span>
      ) : null}
      <span className="address__street">
        {`, ${ap_street_name} ${ap_ext_number}`}
      </span>
    </p>
  );
};
