import { ApartmentOutdoorListProps } from "../../../types/apartmentComponents";
import { ApartmentOutdoor } from "../../relationships/ApartmentOutdoor";
import "./ApartmentOutdoorList.scss";

export const ApartmentOutdoorList = ({
  outdoors = [],
}: ApartmentOutdoorListProps) => {
  return (
    <ul className="outdoors">
      {outdoors?.length > 0 ? (
        <>
          {outdoors.map((outdoor) => (
            <li className="outdoors__item" key={outdoor?.ou_outdoor_space}>
              {outdoor?.out_is_card ? (
                <ApartmentOutdoor
                  ou_outdoor_space={outdoor?.ou_outdoor_space}
                  out_value={outdoor?.out_value}
                />
              ) : null}
            </li>
          ))}
        </>
      ) : null}
    </ul>
  );
};
