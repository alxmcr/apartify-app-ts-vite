import { useFeature } from "../../../hooks/useFeature";
import { ApartmentInvestProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import "./ApartmentInvest.scss";

export const ApartmentInvest = ({
  in_investment,
  inv_value,
}: ApartmentInvestProps) => {
  const { feature, errorFeature, loadingFeature } = useFeature(in_investment);
  if (loadingFeature) return <AppCircleLoader />;
  if (errorFeature !== null)
    return <p>There was an error with this feature.</p>;

  return (
    <>
      <img
        src={feature?.fe_icon_url}
        alt={feature?.fe_name}
        className="apartmentInvest"
      />
      <span className="apartmentInvest__name">{inv_value}</span>
    </>
  );
};
