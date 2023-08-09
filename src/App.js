import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CennikPage from "./pages/Cennik/CennikPage";
import Uslugi from "./pages/Usługi/Uslugi";
import Onas from "./pages/Onas/Onas";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./utilities/scrollToTop";
import GaleriaPage from "./pages/Galeria/GaleriaPage";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cennik" element={<CennikPage />} />
        <Route path="/onas" element={<Onas />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
