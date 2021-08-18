import { ApartmentInvestListProps } from "../../../types/apartmentComponents";
import { ApartmentInvest } from "../../relationships/ApartmentInvest";
import "./ApartmentInvestList.scss";

export const ApartmentInvestList = ({
  invests = [],
}: ApartmentInvestListProps) => {
  return (
    <ul className="investslist">
      {invests?.length > 0 ? (
        <>
          {invests.map((invest) => (
            <>
              {invest?.inv_is_card ? (
                <ApartmentInvest
                  key={invest?.in_investment}
                  in_investment={invest?.in_investment}
                  inv_value={invest?.inv_value}
                />
              ) : null}
            </>
          ))}
        </>
      ) : null}
    </ul>
  );
};
