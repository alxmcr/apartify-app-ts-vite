import { AppLoading } from "../../components/common/AppLoading";
import { ApartmentsGallery } from "../../components/groups/ApartmentsGallery";
import { AparmentsMap } from "../../components/maps/AparmentsMap";
import { useApartments } from "../../hooks/useApartments";
import "./ApartmentsPage.scss";

export const ApartmentsPage = () => {
  const { apartments, errorApartments, loadingApartments } = useApartments();

  if (errorApartments !== null) return <p>There was an error</p>;

  return loadingApartments ? (
    <AppLoading />
  ) : (
    <div className="apartmentspage">
      <div className="apartmentspage__column apartmentspage__column--apartments">
        <ApartmentsGallery apartments={apartments} />
      </div>
      <div className="apartmentspage__column apartmentspage__column--map">
        {/* <AparmentsMap
          defaultLatitude={19.45202521106324}
          defaultLongitude={-99.15246963500977}
          levelZoom={14}
          apartments={apartments}
        /> */}
      </div>
    </div>
  );
};
