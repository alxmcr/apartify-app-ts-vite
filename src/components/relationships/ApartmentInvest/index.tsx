import { useInvestment } from "../../../hooks/useInvestment";
import { ApartmentInvestProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import "./ApartmentInvest.scss";

export const ApartmentInvest = ({
  in_investment,
  inv_value,
}: ApartmentInvestProps) => {
  const { investment, errorInvestment, loadingInvestment } =
    useInvestment(in_investment);
  if (loadingInvestment) return <AppCircleLoader />;
  if (errorInvestment !== null)
    return <p>There was an error with this Investment.</p>;

  return (
    <>
      <img
        src={investment?.in_icon_url}
        alt={investment?.in_name}
        className="apartmentinvest"
      />
      <span className="apartmentinvest__name">{inv_value}</span>
    </>
  );
};
