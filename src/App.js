import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = ['rakib', 'sakib', 'Bappa', 'chaca chowdory','manna']
  return (
    <div className="App">
      {/* <MovieCounter></MovieCounter> */}
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nayok=><Nayok name={nayok}></Nayok>)
      }
      {/* <Nayok name={nayoks[0]} age={56}></Nayok>
      <Nayok name={nayoks[2]} age={20}></Nayok>
      <Nayok name={nayoks[1]} ></Nayok> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
  function MovieCounter() {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count+1);

    return (
      <div>
        <button onClick={handleClick}>Add Movie</button>
        <h5>Numbers of movies: {count}</h5>
        <MovieDisplay movies={count}></MovieDisplay>
      </div>
    )
  }
  function MovieDisplay(props){
    return(
      <h4>Movies I have Acted: {props.movies}</h4>
    )
  }



  function Nayok(props) {
    const nayakStyle = {
      border: '3px solid red',
      margin: '20px',
    }
    return (
      <div style={nayakStyle}>
        <h1>Ami kholNayok {props.name}</h1>
        <h4>I have done 4 movies in age {props.age || 30}</h4>
      </div>
    )
  }
}

export default App;
