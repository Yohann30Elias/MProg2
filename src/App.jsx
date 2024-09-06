import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Pfungen from "./pages/Pfungen";
import Ueber from "./pages/Ueber";
import Umgebung from "./pages/Umgebung";

function App() {
  return (
    <BrowserRouter>
      <ul className="navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Pfungen">Pfungen</Link></li>
        <li><Link to="/Ueber">Über</Link></li>
        <li><Link to="/Umgebung">Umgebung</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pfungen" element={<Pfungen />} />
        <Route path="/Ueber" element={<Ueber />} />
        <Route path="/Umgebung" element={<Umgebung />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
