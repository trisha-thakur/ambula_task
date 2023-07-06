import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Weather from "./components/pages/Weather";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Weather" element={<Weather />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
