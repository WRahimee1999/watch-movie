import './App.css';
import Home from './Pages/Home';

function App() {
  const move_count = 1;
  return (
    <>
    {move_count >= 1 ? (<Home />) : ("No Movies")}
    {/* {move_count >=1 && <MovieCard movie={movie} />} */}
    </>
  )
}

export default App
