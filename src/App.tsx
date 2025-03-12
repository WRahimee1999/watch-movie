import "./App.css";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MovieProvider>
      <NavBar /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite-movies" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
