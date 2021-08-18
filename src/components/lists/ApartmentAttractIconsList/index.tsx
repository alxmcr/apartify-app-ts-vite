import { ApartmentAttractIconsListProps } from "../../../types/apartmentComponents";
import { ApartmentAttract } from "../../relationships/ApartmentAttract";
import "./ApartmentAttractIconsList.scss";

export const ApartmentAttractIconsList = ({
  attracts = [],
}: ApartmentAttractIconsListProps) => {
  return (
    <ul className="attractsicons">
      {attracts?.length > 0 ? (
        <>
          {attracts.map((attract) => (
            <li className="attractsicons__item" key={attract?.fe_feature}>
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
