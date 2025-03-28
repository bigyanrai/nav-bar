import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar1 from "./components/Navbar/Navbar1";
import Home from "./pages/Home";
import HeliCharter from "./pages/HeliCharter";
import VehicleRental from "./pages/VehicleRental";
import DayTours from "./pages/DayTours";
import Company from "./pages/Company";
import TariffRate from "./pages/TariffRate";
import OnlinePayment from "./pages/OnlinePayment";
import Blog from "./pages/Blog";
import Api from "./pages/Api";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vehicle_rental" element={<VehicleRental />} />
        <Route path="heli_charter" element={<HeliCharter />} />
        <Route path="day_tours" element={<DayTours />} />
        <Route path="company" element={<Company />} />
        <Route path="tariff_rates" element={<TariffRate />} />
        <Route path="online_payment" element={<OnlinePayment />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
