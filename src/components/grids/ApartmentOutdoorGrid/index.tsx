import { ApartmentOutdoorGridProps } from "../../../@types/apartmentComponents";
import { ApartmentOutdoor } from "../../relationships/ApartmentOutdoor";
import "./ApartmentOutdoorGrid.scss";

export const ApartmentOutdoorGrid = ({
  outdoors = [],
}: ApartmentOutdoorGridProps) => {
  return (
    <div className="outdoors">
      {outdoors?.length > 0 ? (
        <>
          {outdoors.map((outdoor) => (
            <ApartmentOutdoor
              key={outdoor?.ou_outdoor_space}
              ou_outdoor_space={outdoor?.ou_outdoor_space}
              out_value={outdoor?.out_value}
            />
          ))}
        </>
      ) : null}
    </div>
  );
};
