import { useParams } from "react-router-dom";
import { AddressCard } from "../../components/cards/AddressCard";
import { FeaturesCard } from "../../components/cards/FeaturesCard";
import { FlatCard } from "../../components/cards/FlatCard";
import { InvestmentsCard } from "../../components/cards/InvestmentsCard";
import { NotFoundCard } from "../../components/cards/NotFoundCard";
import { OutdoorSpacesCard } from "../../components/cards/OutdoorSpacesCard";
import { ScheduleVisitCard } from "../../components/cards/ScheduleVisitCard";
import { AppLoading } from "../../components/common/AppLoading";
import { ApartmentAttractIconsGroup } from "../../components/groups/ApartmentAttractIconsGroup";
import { ApartmentDescription } from "../../components/pieces/ApartmentDescription";
import { ApartmentPhotoSection } from "../../components/sections/ApartmentPhotoSection";
import { useApartment } from "../../hooks/useApartment";
import { ApartmentPageParamsProps } from "../../types/apartmentComponents";
import "./ApartmentPage.scss";

export const ApartmentPage = () => {
  const { id } = useParams<ApartmentPageParamsProps>();
  const ap_apartment = !Number(id) ? "0" : id;
  const { apartment, loadingApartment, errorApartment } = useApartment(
    parseInt(ap_apartment)
  );

  if (errorApartment !== null) return <p>There was an error</p>;

  return (
    <div className="apartmentpage" id={id}>
      {loadingApartment ? (
        <AppLoading />
      ) : (
        <>
          {apartment !== null ? (
            <>
              <ApartmentPhotoSection
                ap_apartment={apartment?.ap_apartment}
                ap_url={apartment?.ap_url}
                ap_alt={apartment?.ap_alt}
              />
              <main className="apartmentpage__content">
                <div className="apartmentpage__column apartmentpage__column--details">
                  <>
                    <AddressCard apartment={apartment} />
                    <ApartmentAttractIconsGroup
                      ap_apartment={apartment?.ap_apartment}
                    />
                    <hr />
                    <ApartmentDescription
                      description={apartment?.ap_description}
                    />
                    <FeaturesCard ap_apartment={apartment?.ap_apartment} />
                    <OutdoorSpacesCard ap_apartment={apartment?.ap_apartment} />
                    {/* <ApartmentMapMarker
                    coordinates={apartment?.ap_coordinates}
                  /> */}
                    <InvestmentsCard ap_apartment={apartment?.ap_apartment} />
                    <FlatCard ap_apartment={apartment?.ap_apartment} />
                  </>
                </div>
                <div className="apartmentpage__column apartmentpage__column--visit">
                  <ScheduleVisitCard
                    ap_cost_list={apartment?.ap_cost_list}
                    ap_cost_offer={apartment?.ap_cost_offer}
                  />
                </div>
              </main>
            </>
          ) : (
            <NotFoundCard />
          )}
        </>
      )}
    </div>
  );
};
