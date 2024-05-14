import { useState, useEffect } from 'react';
import './App.css';
import APIKey from './config';
import Movie from './Components/Movie';
import Search from './Components/Search';

const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';
const SearchURL = 'https://api.themoviedb.org/3/search/movie?api_key=';

function App() {
  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    fetch(`${APIURL}${APIKey}`)
    .then((resp) => resp.json())
    .then((data) => {
        setMovieResults(data.results);
      });
  }, []);

  const handleOnSubmit = (searchTerm) => {
    if (searchTerm) {
      fetch(`${SearchURL}${APIKey}&query=${searchTerm}`)
      .then((resp) => resp.json())
      .then((data) => {
          setMovieResults(data.results);
        });
    }
  };

  return (
    <>
      <header>
        <Search onSubmit={handleOnSubmit} />
      </header>
      <div className="movie-container">
        {movieResults.map((element) => (
          <Movie key={element.id} {...element} />
        ))}
      </div>
    </>
  );
}

export default App;