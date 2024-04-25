import {useState,useEffect} from 'react';
import './App.css';
import APIKey from './config';
import Movie from './Components/Movie';

const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';

function App() {
  const [movieResults,setMovieResults] = useState([]);
  //const movieResults = ['age',4512,true,'aa'];
  
  useEffect(()=> {
    fetch(APIURL + APIKey)
    .then((resp) => resp.json())
    .then((data) => 
    console.log(data));
    setMovieResults(data.results);

  }
,[])
  return (
    <>
    {movieResults.map((element,index) => (<Movie key={index}/>)
    
  )}
    </>
  );
}

export default App;
