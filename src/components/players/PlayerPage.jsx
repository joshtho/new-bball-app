import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PlayerPage({player}) {

    function handleClick(playerId) {
    console.log("im clicked", playerId)
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
            <Button variant="primary" onClick={() => handleClick(player.id)}>Stats</Button>
          </Card.Body>
        </Card>)) : <h1>Loading...</h1>

    }

    
    </>
    );
}

export default PlayerPage;