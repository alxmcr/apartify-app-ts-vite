import { useInvests } from "../../../hooks/useInvests";
import { InvestmentsCardProps } from "../../../@types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import { ApartmentInvestGrid } from "../../grids/ApartmentInvestGrid";
import './InvestmentsCard.scss'

export const InvestmentsCard = ({ ap_apartment = 0 }: InvestmentsCardProps) => {
  const { invests, loadingInvests, errorInvests } = useInvests(ap_apartment);

  if (loadingInvests) return <AppCircleLoader />;
  if (errorInvests !== null)
    return <p>There was an error with these investments.</p>;

  return (
    <div className="investments_card">
      <h2 className="investments_card__subtitle">Datos de inversión</h2>
      <ApartmentInvestGrid invests={invests} />
    </div>
  );
};
