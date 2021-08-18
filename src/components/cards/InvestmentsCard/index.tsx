import { useInvests } from "../../../hooks/useInvests";
import { InvestmentsCardProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import { ApartmentInvestList } from "../../grids/ApartmentInvestList";
import './InvestmentsCard.scss'

export const InvestmentsCard = ({ ap_apartment = 0 }: InvestmentsCardProps) => {
  const { invests, loadingInvests, errorInvests } = useInvests(ap_apartment);

  if (loadingInvests) return <AppCircleLoader />;
  if (errorInvests !== null)
    return <p>There was an error with this investment list.</p>;

  return (
    <div className="investmentscard">
      <h2 className="investmentscard__subtitle">Datos de inversión</h2>
      <ApartmentInvestList invests={invests} />
    </div>
  );
};
