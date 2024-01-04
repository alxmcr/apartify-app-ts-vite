import { useAttracts } from "../../../hooks/useAttracts";
import { ApartmentAttractIconsGroupProps } from "../../../@types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import { ApartmentAttractIconsList } from "../../lists/ApartmentAttractIconsList";
import "./ApartmentAttractIconsGroup.scss";

export const ApartmentAttractIconsGroup = ({
  ap_apartment = 0,
}: ApartmentAttractIconsGroupProps) => {
  const { attracts, loadingAttracts, errorAttracts } =
    useAttracts(ap_apartment);

  if (loadingAttracts) return <AppCircleLoader />;
  if (errorAttracts !== null)
    return <p>There was an error with these features.</p>;

  return (
    <div className="attractgroup">
      {attracts.length > 0 ? (
        <ApartmentAttractIconsList attracts={attracts} />
      ) : null}
    </div>
  );
};
