import "./App.css";
import Card from "./test_comp";
import Banner from "./banner";

function App() {
  return (
    <div className="row">
      <Banner />
      <div id="custom-card">
        <Card />
      </div>
      <div id="custom-card">
        <Card />
      </div>
      <div id="custom-card">
        <Card />
      </div>
    </div>
  );
}

export default App;
