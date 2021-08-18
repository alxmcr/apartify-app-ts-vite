import { useAttracts } from "../../../hooks/useAttracts";
import { FeaturesCardProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import { ApartmentAttractList } from "../../grids/ApartmentAttractList";

export const FeaturesCard = ({ ap_apartment = 0 }: FeaturesCardProps) => {
  const { attracts, loadingAttracts, errorAttracts } =
    useAttracts(ap_apartment);

  if (loadingAttracts) return <AppCircleLoader />;
  if (errorAttracts !== null)
    return <p>There was an error with this feature list.</p>;

  return (
    <div className="apartmentfeaturescard">
      <h2 className="apartmentfeaturescard__subtitle">Características</h2>
      <ApartmentAttractList attracts={attracts} />
    </div>
  );
};
