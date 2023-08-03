import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cennik from "./pages/Cennik/Cennik";
import Uslugi from "./pages/Usługi/Uslugi";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cennik" element={<Cennik />} />
        <Route path="/uslugi" element={<Uslugi />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
