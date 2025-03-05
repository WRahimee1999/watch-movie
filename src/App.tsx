import './App.css'
import MovieCard, {Movie} from './components/MovieCard'

function App() {
  const movie: Movie = {
    title: 'Movie Name',
    path: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg',
    release_date: Date.now().toString(),
  };
  return (
    <>
      <MovieCard movie={movie} />
    </>
  )
}

export default App
