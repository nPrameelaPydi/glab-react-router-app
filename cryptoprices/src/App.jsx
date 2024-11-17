import "./style.css";

import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Currencies from "./pages/Currencies.jsx";
import Price from "./pages/Price.jsx";
import Nav from "./components/Nav.jsx";
//import Currencies from "./components/Currencies.jsx";
//import Price from "./components/Price.jsx";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/currencies" element={<Currencies />}></Route>
        <Route path="/price" element={<Price />}></Route>
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}
