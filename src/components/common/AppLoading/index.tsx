import { BallsLoader } from "../../BallsLoader";
import "./AppLoading.scss";

export const AppLoading = () => {
  return (
    <section className="loading">
      <BallsLoader />
    </section>
  );
};
