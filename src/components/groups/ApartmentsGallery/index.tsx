import { ApartmentsGalleryProps } from "../../types/apartmentComponents";
import { AparmentsGrid } from "../AparmentsGrid";
import "./ApartmentsGallery.scss";

export const ApartmentsGallery = ({ apartments }: ApartmentsGalleryProps) => {
  return (
    <section className="apartmentsgallery">
      <h2 className="apartmentsgallery__results">
        {apartments?.length} resultados encontrados
      </h2>
      <div className="apartmentsgallery__container">
        {apartments?.length > 0 ? (
          <AparmentsGrid apartments={apartments} />
        ) : (
          <p className="apartmentsgrid__message">
            There is not an apartment registered.
          </p>
        )}
      </div>
    </section>
  );
};
