import React, { useState } from "react";
import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [view, setView] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header setView={setView} />

      {/* Content grows and pushes footer down */}
      <main className="flex-grow">
        {view === "home" && (
          <>
            <Slider />
            <ProductionHouse />
            <GenreMovieList />
          </>
        )}

        {view === "login" && <Login setView={setView} />}
        {view === "signup" && <Signup setView={setView} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
