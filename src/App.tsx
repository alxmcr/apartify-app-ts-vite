import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { SwitchRoutesApp } from "./routing/SwitchRoutesApp";
import { AppHeader } from "./components/common/AppHeader";
import { AppFooter } from "./components/common/AppFooter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <SwitchRoutesApp />
        <AppFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
