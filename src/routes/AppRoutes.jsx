import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Contacto from "../pages/contacto/Contacto"
import Home from "../pages/home/Home";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
