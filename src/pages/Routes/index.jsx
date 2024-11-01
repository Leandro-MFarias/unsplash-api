import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Details } from "../Details";

export function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movie/:id" element={ <Details /> } />
      </Routes>
    </BrowserRouter>
  )
}