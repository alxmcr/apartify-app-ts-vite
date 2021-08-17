import { useAttracts } from "../../../hooks/useAttracts";
import { FeatureListProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import { ApartmentAttract } from "../../pieces/ApartmentAttract";
import "./FeatureList.scss";

export const FeatureList = ({ ap_apartment = 0 }: FeatureListProps) => {
  const { attracts, errorAttracts, loadingAttracts } =
    useAttracts(ap_apartment);

  if (loadingAttracts) return <AppCircleLoader />;
  if (errorAttracts !== null)
    return <p>There was an error with this feature list.</p>;

  return (
    <ul className="features">
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
    </ul>
  );
};
