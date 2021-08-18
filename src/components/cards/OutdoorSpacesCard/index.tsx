import { useOutdoors } from "../../../hooks/useOutdoors";
import { OutdoorSpacesCardProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import { ApartmentOutdoorGrid } from "../../grids/ApartmentOutdoorGrid";

export const OutdoorSpacesCard = ({
  ap_apartment = 0,
}: OutdoorSpacesCardProps) => {
  const { outdoors, loadingOutdoors, errorOutdoors } =
    useOutdoors(ap_apartment);

  if (loadingOutdoors) return <AppCircleLoader />;
  if (errorOutdoors !== null)
    return <p>There was an error with these outdoor spaces.</p>;

  return (
    <div className="apartmentoutdoorspacescard">
      <h2 className="apartmentoutdoorspacescard__subtitle">Amenidades</h2>
      <ApartmentOutdoorGrid outdoors={outdoors} />
    </div>
  );
};
