import "./App.css";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite-movies" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
