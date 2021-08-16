import { Route, Switch } from "react-router-dom";
import { ApartmentPage } from "../../pages/ApartmentPage";
import { ApartmentsPage } from "../../pages/ApartmentsPage/ApartmentsPage";
import { HomePage } from "../../pages/HomePage";

export function SwitchRoutesApp() {
    return (
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact
            ></Route>
            <Route
                path="/apartments"
                component={ApartmentsPage}
                exact
            ></Route>
            <Route
                path="/apartments/:id"
                component={ApartmentPage}
                exact
            ></Route>
        </Switch>
    )
}