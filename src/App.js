import {useState, useEffect} from 'react';
import './App.css';
import APIKey from './config';
import Movie from './Components/Movie';

const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';
const SearchURL = 'https://api.themoviedb.org/3/search/movie?api_key=';

function App() {
  const [movieResults, setMovieResults] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('')
  //const movieResults = ['age',4512,true, "aa"];

  useEffect( ()=> {
    fetch(APIURL + APIKey)
    .then( (resp) => resp.json() )
    .then( (data) => {
        console.log(data.results);
        setMovieResults(data.results);
        }
        )
  }
  ,[])

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm)
    {
      fetch(SearchURL + APIKey + "&query=" + searchTerm)
      .then( (resp) => resp.json() )
      .then( (data) => {
        console.log(data.results);
        setMovieResults(data.results);
      })
    }

  }

  const handleOnChange = (e) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }
  return (
    <>
    <header>
      <form onSubmit={handleOnSubmit}>
        <input className='search' type="search" placeholder='Search...' value={searchTerm} onChange={handleOnChange}></input>
      </form>
    </header>
    <div className='movie-container'>
    {movieResults.map( (element) => (<Movie key={element.id} {...element}/>)
    )}
    </div>
    </>
  );
}

export default App;
