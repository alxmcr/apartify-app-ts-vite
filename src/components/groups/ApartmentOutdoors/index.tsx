import { useOutdoors } from "../../../hooks/useOutdoors";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import "./ApartmentOutdoors.scss";

export const ApartmentOutdoors = ({
  ap_apartment = 0,
}: ApartmentOutdoorsProps) => {
  const { outdoors, loadingOutdoors, errorOutdoors } =
    useOutdoors(ap_apartment);

  if (loadingOutdoors) return <AppCircleLoader />;
  if (errorOutdoors !== null)
    return <p>There was an error with this outdoors list.</p>;

  return (
    <div className="apartmentoutdoors">
      <h2 className="apartmentoutdoors__subtitle">Amenidades</h2>
      <div className="apartmentoutdoors__outdoorspaces">
        {/* {outdoorSpaces.map((outdoorSpace) => (
          <div
            className="apartmentoutdoors__outdoorspace"
            key={outdoorSpace?.ou_outdoor_space}
          >
            <span className="apartmentoutdoors__label">
              {outdoorSpace?.ou_name}:
            </span>
            <span className="apartmentoutdoors__value">0</span>
          </div>
        ))} */}
      </div>
    </div>
  );
};
