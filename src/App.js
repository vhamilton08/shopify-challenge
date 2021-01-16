import { useState } from 'react';
import Movies from './components/Movies';
import Search from './components/Search';
import axios from 'axios';
import './App.css';

const App = () => {
  const [skerp , setSkerp] = useState('')
  const [movie, setMovie] = useState([])
  // const [selected, setSelected] = useState({})
  const apiurl = `http://www.omdbapi.com/?s=${skerp}&apikey=e66ea6a9`

  const inputHandle = (event) => {
    setSkerp(event.target.value)

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
        <Search inputHandle={inputHandle} search={search}/>
        {movie.map((el, index) => {
          return (
            <Movies key={index} el={el}/>
          )
        })}
        {/* <Movies movie={movie}/> */}
      </div>
    </div>
  );
}

export default App;
