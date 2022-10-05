import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function PlayerPage({players, stats}) {
const [hide, setHide] = useState(true)



// function handleClick(id) { 
//             fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${id}`)
//             .then(r => r.json())
//             .then(data => {
                
//                 setStats(data)
//             })
//             setHide(false)

// }

// const {pts, reb, ast, stl, blk, ft_pct, fg_pct, fg3_pct, fg3m} = stats
// const min = parseInt(stats.min)

return (
    <>
    {players ? players.map(player => (
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
                hide ? 
                <Button variant="primary" onClick={() => setHide(false)}>Stats</Button>
                : 
                <Card.Text>
                    {console.log(stats)}
                { stats ? 
                <div>
                    Points: {stats.pts}
                    `Rebounds: ${stats.reb}`
                    `Assists: ${stats.ast}`
                    
                </div>
                :
                "Loading..."
                }
                </Card.Text>
            }
          </Card.Body>
        </Card>)) : <h1>Loading...</h1>

    }

    
    </>
    );
}

export default PlayerPage;