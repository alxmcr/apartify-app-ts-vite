import { ApartmentInvestListProps } from "../../../types/apartmentComponents";
import { ApartmentInvest } from "../../relationships/ApartmentInvest";
import "./ApartmentInvestList.scss";

export const ApartmentInvestList = ({
  invests = [],
}: ApartmentInvestListProps) => {
  return (
    <ul className="Invests">
      {invests?.length > 0 ? (
        <>
          {invests.map((Invest) => (
            <li className="Invests__item" key={Invest?.fe_feature}>
              {Invest?.att_is_card ? (
                <ApartmentInvest
                  fe_feature={Invest?.fe_feature}
                  att_value={Invest?.att_value}
                />
              ) : null}
            </li>
          ))}
        </>
      ) : null}
    </ul>
  );
};
