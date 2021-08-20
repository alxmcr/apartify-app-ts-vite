import { useFloorPlans } from "../../../hooks/useFloorPlans";
import { FloorPlanCardProps } from "../../../types/apartmentComponents";
import { AppCircleLoader } from "../../common/AppCircleLoader";
import "./FloorPlanCard.scss";

export const FloorPlanCard = ({ ap_apartment = 0 }: FloorPlanCardProps) => {
  const { floorPlans, loadingFloorPlans, errorFloorPlans } = useFloorPlans(ap_apartment);

  if (loadingFloorPlans) return <AppCircleLoader />;
  if (errorFloorPlans !== null) return <p>There was an error with this floor plan.</p>;
  if (floorPlans === null) return null;
  if (floorPlans?.length === 0) return null;

  return (
    <div className="floor_plan_card">
      <h2 className="floor_plan_card__subtitle">Distribución</h2>
      <img
        src={floorPlans[0]?.fp_url}
        alt={floorPlans[0]?.fp_alt}
        className="floor_plan_card__image"
        loading="lazy"
      />
    </div>
  );
};
