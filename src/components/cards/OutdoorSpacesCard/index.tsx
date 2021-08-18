import { useOutdoors } from "../../../hooks/useOutdoors";
import { OutdoorSpacesCardProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import { ApartmentOutdoorList } from "../../lists/ApartmentOutdoorList";

export const OutdoorSpacesCard = ({
  ap_apartment = 0,
}: OutdoorSpacesCardProps) => {
  const { outdoors, loadingOutdoors, errorOutdoors } =
    useOutdoors(ap_apartment);

  if (loadingOutdoors) return <AppCircleLoader />;
  if (errorOutdoors !== null)
    return <p>There was an error with this outdoor spaces list.</p>;

  return (
    <div className="apartmentoutdoorspacescard">
      <h2 className="apartmentoutdoorspacescard__subtitle">Amenidades</h2>
      <ApartmentOutdoorList outdoors={outdoors} />
    </div>
  );
};
