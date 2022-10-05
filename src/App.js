import './App.css';
import NavBar from './components/navigation/NavBar';
import Home from './components/Home';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import PlayerPage from './components/players/PlayerPage';
import PlayerList from './components/players/PlayerList';


function App() {
  const [search, setSearch] = useState('')
  const [players, setPlayer] = useState([])
  const [stats, setStats] = useState({})

  

  return (
    <div className="App">
      <Router>
      <NavBar 
      search={search} 
      setSearch={setSearch} 
      setPlayer={setPlayer} 
      setStats={setStats}
      />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route 
          path='/players' 
          element={<PlayerList players={players} stats={stats} />} 
          >
            <Route 
            path='/players/:id' 
            element={<PlayerPage players={players} stats={stats} />} 
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;