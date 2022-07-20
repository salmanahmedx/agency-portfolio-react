import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Route, Routes, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";
import ScrolledTop from "./components/ScrolledTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <ScrolledTop></ScrolledTop>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />}></Route>
          <Route path="/work" element={<OurWork></OurWork>}></Route>
          <Route path="/work/:id" element={<MovieDetail></MovieDetail>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
