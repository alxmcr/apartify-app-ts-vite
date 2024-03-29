import { AparmentsMapCard } from "../../components/cards/AparmentsMapCard";
import { AppColumn } from "../../components/common/AppColumn";
import { AppColumns } from "../../components/common/AppColumns";
import { AppError } from "../../components/common/AppError";
import { AppLoading } from "../../components/common/AppLoading";
import { ApartmentsGrid } from "../../components/grids/ApartmentsGrid";
import { useApartments } from "../../hooks/useApartments";
import "./ApartmentsPage.scss";

export const ApartmentsPage = () => {
  const { apartments, errorApartments, loadingApartments } = useApartments();
  const modeDisplayMapbox = import.meta.env.VITE_APP_MODE_DISPLAY_MAPBOX;

  if (errorApartments !== null) {
    return <AppError errorMessage={errorApartments.message} />;
  }

  return loadingApartments ? (
    <AppLoading />
  ) : (
    <>
      {apartments.length > 0 ? (
        <AppColumns>
          <>
            <AppColumn variant="apartments">
              <h2 className="apartments_page__subtitle">
                {apartments?.length} resultados encontrados
              </h2>
              <ApartmentsGrid apartments={apartments} />
            </AppColumn>
            <AppColumn variant="map">
              <AparmentsMapCard
                defaultLatitude={apartments[0].ap_latitude}
                defaultLongitude={apartments[0].ap_longitude}
                levelZoom={13}
                apartments={apartments}
              />
            </AppColumn>
          </>
        </AppColumns>
      ) : (
        <p>No hay departmentos registrados</p>
      )}
    </>
  );
};
