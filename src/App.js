import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/modules/sideBar";
import Menu from "./components/screens/Menu";
import PageNotFound from "./components/screens/pageNotFound";
import Home from "./components/screens/home";
import Reservation from "./components/screens/Reservation";
import TableService from "./components/screens/TableService";
import Delivery from "./components/screens/Delivery";
import Accounting from "./components/screens/Accounting";

function App() {
  return (
    <>
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/TableService" element={<TableService />} />
        <Route path="menu" element={<Menu />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/Accounting" element={<Accounting />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
