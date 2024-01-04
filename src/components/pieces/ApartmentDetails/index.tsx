import { ApartmentDetailsProps } from "../../../@types/apartmentComponents";
import "./ApartmentDetails.scss";

export const ApartmentDetails = ({
  ap_street_name = "",
  ap_ext_number = "",
  neighborhood,
  locationState,
  locationCity,
}: ApartmentDetailsProps) => {
  return (
    <div className="apartmentdetails">
      <h1 className="apartmentdetails__title">
        <span className="apartmentdetails__street">
          {`${ap_street_name} ${ap_ext_number}, `}
        </span>
        {neighborhood !== null ? (
          <>
            <span className="apartmentdetails__neighborhood">
              {`${neighborhood?.ne_name}, `}
            </span>
            <span className="apartmentdetails__city">{`${locationCity?.ci_name}, `}</span>
            <span className="apartmentdetails__state">
              {`${locationState?.st_name}`}
            </span>
          </>
        ) : null}
      </h1>
    </div>
  );
};
