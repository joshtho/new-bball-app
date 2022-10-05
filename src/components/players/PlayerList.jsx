import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import PlayerPage from './PlayerPage';

function PlayerList({players}) {
    const [stats, setStats] = useState([])

    function handleClick(id) {
        fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${id}`)
            .then(r => r.json())
            .then(data => setStats(data))

    }
    
    return (
        
        <Accordion>
        {players ? players.map((player, index) => (
            <Accordion.Item eventKey={`${index}`} key={player.id} onClick={() => handleClick(player.id)}>
              <Accordion.Header>{player.first_name + " " + player.last_name}</Accordion.Header>
              <Accordion.Body>
                {<PlayerPage player={player} />}
              </Accordion.Body>
            </Accordion.Item> 

        ))
        : <h1>Loading... </h1>}
        
          </Accordion>
        
      
  );
}

export default PlayerList;