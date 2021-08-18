import { FeatureListProps } from "../../../types/apartmentComponents";
import "./FeatureList.scss";

export const FeatureList = ({ ap_apartment = 0 }: FeatureListProps) => {
  return (
    <ul className="features">
      {/* {attracts?.length > 0 ? (
        <>
          {attracts.map((attract) => (
            <li className="features__item" key={attract?.fe_feature}>
              {attract?.att_is_card ? (
                <ApartmentAttract
                  fe_feature={attract?.fe_feature}
                  att_value={attract?.att_value}
                />
              ) : null}
            </li>
          ))}
        </>
      ) : null} */}
    </ul>
  );
};
