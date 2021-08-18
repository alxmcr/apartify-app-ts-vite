import { useParams } from "react-router-dom";
import { AddressCard } from "../../components/cards/AddressCard";
import { FeaturesCard } from "../../components/cards/FeaturesCard";
import { FlatCard } from "../../components/cards/FlatCard";
import { InvestmentsCard } from "../../components/cards/InvestmentsCard";
import { OutdoorSpacesCard } from "../../components/cards/OutdoorSpacesCard";
import { AppLoading } from "../../components/common/AppLoading";
import { ApartmentPhotoGrid } from "../../components/grids/ApartmentPhotoGrid";
import { ApartmentAttractIconsGroup } from "../../components/groups/ApartmentAttractIconsGroup";
import { ApartmentDescription } from "../../components/pieces/ApartmentDescription";
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
          <ApartmentPhotoGrid 
            ap_apartment={apartment?.ap_apartment}
            ap_url={apartment?.ap_url}
            ap_alt={apartment?.ap_alt}
          />
          <main className="apartmentpage__content">
            <div className="apartmentpage__column apartmentpage__column--details">
              {apartment !== undefined ? (
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
              ) : null}
            </div>
            <div className="apartmentpage__column apartmentpage__column--visit">
              {/* <ApartmentVisit /> */}
            </div>
          </main>
        </>
      )}
    </div>
  );
};
