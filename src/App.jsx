import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="bg-red-400 global-padding">
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
