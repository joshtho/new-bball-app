import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function PlayerPage({player}) {
const [hide, setHide] = useState(true)
const [stats, setStats] = useState({})

useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${player.id}`)
    .then(r => r.json())
    .then(data => console.log(data.data[0]))

},[])

    function handleClick(playerId) {

        setHide(false)
}
console.log(player)
const {pts, reb, ast, stl, blk, ft_pct, fg_pct, fg3_pct, fg3m} = stats
const min = parseInt(stats.min)
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
                hide ? <Button variant="primary" onClick={handleClick}>Stats</Button>
                : <Card.Text>
                {stats ? 
                `Average min: ${min}`
                `Points: ${pts}`
                `Rebounds: ${reb}`
                `Assists: ${ast}`
                `Steals: ${stl}`
                `Blocks: ${blk}`
                `FT%: ${ft_pct}`
                `3p%: ${fg3_pct}`
                `3pm: ${fg3m}`
                 : "Loading..."}
                </Card.Text>
            }
          </Card.Body>
        </Card>)) : <h1>Loading...</h1>

    }

    
    </>
    );
}

export default PlayerPage;