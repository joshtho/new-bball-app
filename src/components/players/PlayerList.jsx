import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import PlayerPage from './PlayerPage';

function PlayerList({players}) {
  console.log(players)
    return (
        
        <Accordion>
        {players ? players.map((player, index) => (
            <Accordion.Item eventKey={`${index}`} key={player.id}>
              <Accordion.Header>{player.first_name + " " + player.last_name}</Accordion.Header>
              <Accordion.Body>
                {<PlayerPage />}
              </Accordion.Body>
            </Accordion.Item> 

        ))
        : <h1>Loading... </h1>}
        
          </Accordion>
        
      
  );
}

export default PlayerList;