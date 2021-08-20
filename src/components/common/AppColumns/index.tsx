import { AppColumnsProps } from "../../../types/apartmentComponents";
import "./AppColumns.scss";

export const AppColumns = ({ children }: AppColumnsProps) => {
  return <div className="app_columns">{children}</div>;
};
