import { AppColumnProps } from "../../../types/apartmentComponents";
import "./AppColumn.scss";

export const AppColumn = ({ children, variant = "" }: AppColumnProps) => {
  return (
    <div className={`app_column_page app_column_page--${variant}`}>
      {children}
    </div>
  );
};
