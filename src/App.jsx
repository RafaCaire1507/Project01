import React from 'react'
import MovieList from './components/MovieList'
import './App.css'

function App() {
  const [Movie, setMovie] = useState([])

  useEffect(() => {
    const filmes = async () => {
      const response = await fetch('comedy_movies.json')
      const data = await response.json()
      setMovie(data)
    }
    filmes()
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
