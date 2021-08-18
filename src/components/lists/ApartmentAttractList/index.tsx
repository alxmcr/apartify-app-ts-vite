import { ApartmentAttractListProps } from "../../../types/apartmentComponents";
import { ApartmentAttract } from "../../relationships/ApartmentAttract";
import "./ApartmentAttractList.scss";

export const ApartmentAttractList = ({
  attracts = [],
}: ApartmentAttractListProps) => {
  return (
    <div className="attracts">
      {attracts?.length > 0 ? (
        <>
          {attracts.map((attract) => (
            <ApartmentAttract
              key={attract?.fe_feature}
              fe_feature={attract?.fe_feature}
              att_value={attract?.att_value}
            />
          ))}
        </>
      ) : null}
    </div>
  );
};
