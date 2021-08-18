import { useParams } from "react-router-dom";
import { AppLoading } from "../../components/common/AppLoading";
import { ApartmentDescription } from "../../components/pieces/ApartmentDescription";
import { ApartmentDetails } from "../../components/pieces/ApartmentDetails";
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
          {/* <ApartmentImages
            cover={apartment?.ap_url}
            images={apartment?.ap_gallery}
          /> */}
          <div className="apartmentpage__content">
            <div className="apartmentpage__column apartmentpage__column--details">
              {apartment !== undefined ? (
                <>
                  <ApartmentDetails apartment={apartment} />
                  <ApartmentDescription
                    description={apartment?.ap_description}
                  />
                  {/* <ApartmentFeatures features={apartment?.features} /> */}

                  <ApartmentOutdoorSpaces
                    
                  />
                  {/* <ApartmentMapMarker
                    coordinates={apartment?.ap_coordinates}
                  /> */}
                  {/* <ApartmentInvestments investments={apartment?.investments} /> */}
                  {/* <ApartmentFlatImageCard flat={apartment.} /> */}
                </>
              ) : null}
            </div>
            <div className="apartmentpage__column apartmentpage__column--visit">
              {/* <ApartmentVisit /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
