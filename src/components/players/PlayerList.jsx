import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import PlayerPage from './PlayerPage';
import { Link } from 'react-router-dom';

function PlayerList({players}) {
    const [stats, setStats] = useState({})

    function handleClick(id) {
        fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${id}`)
            .then(r => r.json())
            .then(info => setStats(info.data[0]))

    }
    
    return (
        <Accordion >
            {players ? players.map((player, index) => (
                <Accordion.Item 
                button component={Link} to={`${player.id}`}
                eventKey={`${index}`} 
                key={player.id} 
                onClick={() => handleClick(player.id)}
                >
                    <Accordion.Header>
                        {player.first_name + " " + player.last_name}
                        </Accordion.Header>
                    <Accordion.Body>
                        {stats ? <PlayerPage player={player} stats={stats} /> : <PlayerPage player={player} /> }
                    </Accordion.Body>
                </Accordion.Item> 

            ))
            : <h1>Loading... </h1>}
        
        </Accordion>
        );
      }
      
      export default PlayerList;