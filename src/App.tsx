import "./App.scss";
import { MapMarker } from "./components/MapMarker";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <MapMarker latitude={19.451119} longitude={-99.15295} levelZoom={14} />
    </div>
  );
}

export default App;
