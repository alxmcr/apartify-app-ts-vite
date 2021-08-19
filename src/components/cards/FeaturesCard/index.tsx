import { useAttracts } from "../../../hooks/useAttracts";
import { FeaturesCardProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import { ApartmentAttractGrid } from "../../grids/ApartmentAttractGrid";
import './FeaturesCard.scss'

export const FeaturesCard = ({ ap_apartment = 0 }: FeaturesCardProps) => {
  const { attracts, loadingAttracts, errorAttracts } =
    useAttracts(ap_apartment);

  if (loadingAttracts) return <AppCircleLoader />;
  if (errorAttracts !== null)
    return <p>There was an error with these features.</p>;

  return (
    <div className="apartment_features_card">
      <h2 className="apartment_features_card__subtitle">Características</h2>
      <ApartmentAttractGrid attracts={attracts} />
    </div>
  );
};
