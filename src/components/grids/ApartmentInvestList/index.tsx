import { ApartmentInvestListProps } from "../../../types/apartmentComponents";
import { ApartmentInvest } from "../../relationships/ApartmentInvest";
import "./ApartmentInvestList.scss";

export const ApartmentInvestList = ({
  invests = [],
}: ApartmentInvestListProps) => {
  return (
    <div className="investlist">
      {invests?.length > 0 ? (
        <>
          {invests.map((invest) => (
            <ApartmentInvest
              key={invest?.in_investment}
              in_investment={invest?.in_investment}
              inv_value={invest?.inv_value}
            />
          ))}
        </>
      ) : null}
    </div>
  );
};
