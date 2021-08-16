import { useParams } from "react-router-dom";
import { ApartmentImages } from "../../components/ApartmentImages";
import { ApartmentDescriptionCard } from "../../components/cards/ApartmentDescriptionCard";
import { ApartmentDetailsCard } from "../../components/cards/ApartmentDetailsCard";
import { ApartmentFeaturesCard } from "../../components/cards/ApartmentFeaturesCard";
import { ApartmentFlatImageCard } from "../../components/cards/ApartmentFlatImageCard";
import { ApartmentInvestmentsCard } from "../../components/cards/ApartmentInvestmentsCard";
import { ApartmentMapMarkerCard } from "../../components/cards/ApartmentMapMarkerCard";
import { ApartmentPleasantnessCard } from "../../components/cards/ApartmentPleasantnessCard";
import { ApartmentVisitCard } from "../../components/cards/ApartmentVisitCard";
import { AppLoading } from "../../components/common/AppLoading";
import { useApartment } from "../../hooks/useApartment";
import { ApartmentPageParamsProps } from "../../types/apartmentComponents";
import "./ApartmentPage.scss";

export const ApartmentPage = () => {
  const { id } = useParams<ApartmentPageParamsProps>();
  const { apartment, loading, error } = useApartment(id);

  if (error !== null) return <p>There was an error</p>;

  return (
    <div className="apartmentpage" id={id}>
      {loading ? (
        <AppLoading />
      ) : (
        <>
          <ApartmentImages
            cover={apartment?.ap_cover}
            images={apartment?.ap_gallery}
          />
          <div className="apartmentpage__content">
            <div className="apartmentpage__column apartmentpage__column--details">
              {apartment !== undefined ? (
                <>
                  <ApartmentDetailsCard apartment={apartment} />
                  <ApartmentDescriptionCard
                    description={apartment?.ap_description}
                  />
                  <ApartmentFeaturesCard features={apartment?.ap_features} />
                  <ApartmentPleasantnessCard
                    pleasantness={apartment?.ap_pleasantness}
                  />
                  {/* <ApartmentMapMarkerCard
                    coordinates={apartment?.ap_coordinates}
                  /> */}
                  <ApartmentInvestmentsCard
                    investments={apartment?.ap_investments}
                  />
                  <ApartmentFlatImageCard flat_image={apartment.ap_flat} />
                </>
              ) : null}
            </div>
            <div className="apartmentpage__column apartmentpage__column--visit">
              <ApartmentVisitCard />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
