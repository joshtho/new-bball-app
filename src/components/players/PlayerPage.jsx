import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlayerStats from './PlayerStats';


function PlayerPage({player, stats}) {
const [hide, setHide] = useState(true)
    

return (
    <>
    {
    player ? 
         <Card key={player.id}>
          <Card.Header>{player.position}</Card.Header>
          <Card.Body>
            <Card.Title>
            {player.team ? player.team.city : "Loading..."}
            <br />
            {player.team ? player.team.name : "Loading..."}
            </Card.Title>
            <Card.Text>
            {player.first_name + " " + player.last_name}
            
            </Card.Text>
            {
                hide ? 
                <Button variant="primary" onClick={() => setHide(false)}>2021 Stats</Button>
                : 
                <>
                { stats ? 
                <PlayerStats stats={stats} />
                :
                <h4>No 2021 stats</h4>
                }
                </>
            }
          </Card.Body>
        </Card> : <h1>Loading...</h1>
    }

    
    </>
    );
}

export default PlayerPage;