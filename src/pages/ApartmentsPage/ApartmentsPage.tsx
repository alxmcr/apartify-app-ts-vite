import { AparmentsMapCard } from "../../components/cards/AparmentsMapCard";
import { AppError } from "../../components/common/AppError";
import { AppLoading } from "../../components/common/AppLoading";
import { ApartmentsGallery } from "../../components/xxxxgroups/ApartmentsGallery";
import { useApartments } from "../../hooks/useApartments";
import "./ApartmentsPage.scss";

export const ApartmentsPage = () => {
  const { apartments, errorApartments, loadingApartments } = useApartments();

  if (errorApartments !== null)
    return <AppError errorMessage="There was an error." />;

  return loadingApartments ? (
    <AppLoading />
  ) : (
    <>
      {apartments.length > 0 ? (
        <div className="apartmentspage">
          <div className="apartmentspage__column apartmentspage__column--apartments">
            <ApartmentsGallery apartments={apartments} />
          </div>
          <div className="apartmentspage__column apartmentspage__column--map">
            {/* <AparmentsMapCard
              defaultLatitude={apartments[0].ap_latitude}
              defaultLongitude={apartments[0].ap_longitude}
              levelZoom={14}
              apartments={apartments}
            /> */}
          </div>
        </div>
      ) : (
        <p>No hay departmentos registrados</p>
      )}
    </>
  );
};
