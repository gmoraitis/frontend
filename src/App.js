import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sportradar from './sportradar.jpg';
import { useState, useEffect } from 'react';
import MatchesPresentation from './components/MatchesPresentation';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data')
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  return (
  <div className="App">
      <header>
        <img className="Img" src={sportradar} alt="Sportradar" />
      </header>
      <h3>Matches Presentation</h3>
      {data.length &&
        <MatchesPresentation data={data} />}
    </div>
  
  );
}

export default App;

