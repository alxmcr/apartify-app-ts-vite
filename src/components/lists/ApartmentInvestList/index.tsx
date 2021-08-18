import { ApartmentInvestListProps } from "../../../types/apartmentComponents";
import { ApartmentInvest } from "../../relationships/ApartmentInvest";
import "./ApartmentInvestList.scss";

export const ApartmentInvestList = ({
  invests = [],
}: ApartmentInvestListProps) => {
  return (
    <ul className="invests">
      {invests?.length > 0 ? (
        <>
          {invests.map((invest) => (
            <li className="invests__item" key={invest?.in_investment}>
              {invest?.inv_is_card ? (
                <ApartmentInvest
                  in_investment={invest?.in_investment}
                  inv_value={invest?.inv_value}
                />
              ) : null}
            </li>
          ))}
        </>
      ) : null}
    </ul>
  );
};
