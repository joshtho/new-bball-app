import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import PlayerPage from './PlayerPage';

function PlayerList({players}) {
  console.log(players)
    return (
        
        <Accordion>
        {players ? 
          <Accordion.Item eventKey="0">
            <Accordion.Header>{players.name}</Accordion.Header>
            <Accordion.Body>
              {<PlayerPage />}
            </Accordion.Body>
          </Accordion.Item> : <h1>Loading... </h1>}
        
          </Accordion>
        
      
  );
}

export default PlayerList;