import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Route, Routes } from "react-router-dom"
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />}></Route>
        <Route path="/work" element={<OurWork></OurWork>}></Route>
        <Route path="/work/:id" element={<MovieDetail></MovieDetail>}></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
