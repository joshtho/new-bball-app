import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function PlayerPage({player}) {
const [hide, setHide] = useState(true)
const [stats, setStats] = useState({})
    function handleClick(playerId) {
        fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerId}`)
    .then(r => r.json())
    .then(data => {
        console.log(data.data[0])
        setStats(data.data[0])
        setHide(false)
    })
}
console.log(player)

  
return (
    <>
    {player.data ? player.data.map(player => (
         <Card key={player.id}>
          <Card.Header>{player.position}</Card.Header>
          <Card.Body>
            <Card.Title>{player.first_name + " " + player.last_name}</Card.Title>
            <Card.Text>
            {player.team ? player.team.city : "Loading..."}
            <br />
            {player.team ? player.team.name : "Loading..."}
            </Card.Text>
            {
                hide ? <Button variant="primary" onClick={() => handleClick(player.id)}>Stats</Button>
                : <Card.Text>
                {stats ? stats.ast : "Loading..."}
                <br />
                {player.team ? player.team.name : "Loading..."}
                </Card.Text>
            }
          </Card.Body>
        </Card>)) : <h1>Loading...</h1>

    }

    
    </>
    );
}

export default PlayerPage;