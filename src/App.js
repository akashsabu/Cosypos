import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/modules/sideBar";
import Menu from "./components/screens/Menu";
import PageNotFound from "./components/screens/pageNotFound";
import Home from "./components/screens/home";

function App() {
  return (
    <>
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="/PageNotFound" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
