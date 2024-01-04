import { AppErrorProps } from "../../../@types/apartmentComponents";
import "./AppError.scss";

export const AppError = ({ errorMessage }: AppErrorProps) => {
  return <section className="error">{errorMessage}</section>;
};
