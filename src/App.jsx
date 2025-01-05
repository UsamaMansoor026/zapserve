import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { About, Blog, Contact, Home, Hosting } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/hosting" element={<Hosting />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
