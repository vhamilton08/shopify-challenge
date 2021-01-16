import { useState } from 'react';
import MovieList from './components/MovieList';
import Search from './components/Search';
import axios from 'axios';
import './App.css';

const App = () => {
  const [searchTerm , setSeachTerm] = useState('')
  const [movie, setMovie] = useState([])
  
  const apiurl = `http://www.omdbapi.com/?s=${searchTerm}&apikey=e66ea6a9`

  const inputHandle = (event) => {
    setSeachTerm(event.target.value)
  }

  const search = (event) => {
    if(event.key === "Enter") {
      axios(apiurl)
      // .then(res => console.log(res.data))
      .then( res => setMovie(res.data.Search))
    }
  }
    
  return (
    <div className="App">
      <header>
        <h1>THE SHOPPIES</h1>
      </header>
      <div>
        <MovieList movie={movie}/>
        <Search inputHandle={inputHandle} search={search}/>
      </div>
    </div>
  );
}
export default App;