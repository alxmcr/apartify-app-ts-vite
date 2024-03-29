import { ApartmentInvestGridProps } from "../../../@types/apartmentComponents";
import { ApartmentInvest } from "../../relationships/ApartmentInvest";
import "./ApartmentInvestGrid.scss";

export const ApartmentInvestGrid = ({
  invests = [],
}: ApartmentInvestGridProps) => {
  return (
    <div className="invests">
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
