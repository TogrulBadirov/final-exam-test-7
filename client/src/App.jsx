import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Basket from "./pages/Basket";
import Detail from "./pages/Detail";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NoPage from "./pages/NoPage";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/AddPage" element={<AddPage />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
