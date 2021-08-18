import { ApartmentAttractListProps } from "../../../types/apartmentComponents";
import { ApartmentAttract } from "../../relationships/ApartmentAttract";
import "./ApartmentAttractList.scss";

export const ApartmentAttractList = ({
  attracts = [],
}: ApartmentAttractListProps) => {
  return (
    <ul className="attracts">
      {attracts?.length > 0 ? (
        <>
          {attracts.map((attract) => (
            <li className="attracts__item" key={attract?.fe_feature}>
              {attract?.att_is_card ? (
                <ApartmentAttract
                  fe_feature={attract?.fe_feature}
                  att_value={attract?.att_value}
                />
              ) : null}
            </li>
          ))}
        </>
      ) : null}
    </ul>
  );
};
