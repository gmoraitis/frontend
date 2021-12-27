import './App.css';
import SoccerBall from './SoccerBall.jpg';
import { useState, useEffect } from 'react';
import Data from './components/MatchesPresentation';


function App() {
  const [data, setData] = useState({});

  const getResults = () => {
    fetch('/data')
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch();
  };

  useEffect(() => {
    getResults();
    setInterval(() => getResults(), 600 * 1000);
  }, []);

  return (
    <div className="App">
      <header>
        <img className="Img" src={SoccerBall} alt="Soccer Ball" />
      </header>
      <Data data={data} />
    </div>
  );
}


export default App;