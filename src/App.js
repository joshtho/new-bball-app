import './App.css';
import NavBar from './components/navigation/NavBar';
import Home from './components/Home';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import PlayerPage from './components/players/PlayerPage';


function App() {
  const [search, setSearch] = useState('')
  const [player, setPlayer] = useState([])

  // useEffect(() => {
  //   fetch("https://www.balldontlie.io/api/v1/players")
  //   .then(r => r.json())
  //   .then(data => console.log(data))
  // },[])

  return (
    <div className="App">
      <Router>
      <NavBar search={search} setSearch={setSearch} setPlayer={setPlayer} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/players' element={<PlayerPage player={player} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;