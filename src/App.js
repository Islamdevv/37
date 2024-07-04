import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import Product from "./components/Product";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/product" element={<Product />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
