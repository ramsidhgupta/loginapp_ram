import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Register from "./component/Register";
import Details from "./component/Details";
import Edit from "./component/Edit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/view/:id" element={<Details />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
