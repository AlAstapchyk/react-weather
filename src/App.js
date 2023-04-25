import Forecast from "./pages/Forecast/Forecast";
import Home from './pages/Home/Home'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="body__container">
        <Routes>
          <Route path="/react-weather/forecast" element={<Forecast />}/>
          <Route path="/react-weather/" element={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
