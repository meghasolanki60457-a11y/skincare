import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./components/Detail";

function App() {
  return (
    
    <Routes>
      {/* HOME ROUTE */}
      <Route path="/" element={<Home />} />

      {/* PRODUCT DETAIL */}
      <Route path="/product/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;