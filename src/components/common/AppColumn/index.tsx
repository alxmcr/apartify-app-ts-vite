import { AppColumnProps } from "../../../types/apartmentComponents";
import "./AppColumn.scss";

export const AppColumn = ({ children }: AppColumnProps) => {
  return <div className="app_column_page">{children}</div>;
};
