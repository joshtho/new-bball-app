import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function PlayerPage({players, stats}) {
//const [hide, setHide] = useState(true)



// function handleClick(id) { 
//             fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${id}`)
//             .then(r => r.json())
//             .then(data => {
                
//                 setStats(data)
//             })
//             setHide(false)

// }

//const {pts, reb, ast, min, stl, blk, ft_pct, fg_pct, fg3_pct, fg3m} = stats
// const min = parseInt(stats.min)
console.log(players)
return (
    <>
    {
    // players ? players.map(player => (
    //      <Card key={player.id}>
    //       <Card.Header>{player.position}</Card.Header>
    //       <Card.Body>
    //         <Card.Title>{player.first_name + " " + player.last_name}</Card.Title>
    //         <Card.Text>
    //         {player.team ? player.team.city : "Loading..."}
    //         <br />
    //         {player.team ? player.team.name : "Loading..."}
    //         </Card.Text>
    //         {
    //             hide ? 
    //             <Button variant="primary" onClick={() => setHide(false)}>2021 Stats</Button>
    //             : 
    //             <>
    //             { stats ? 
    //             <Card.Text>
    //                 Points: {pts}
    //                 <br/>
    //                 Rebounds: {reb}
    //                 <br/>
    //                 Assists: {ast}
    //                 <br/>
    //                 Minutes: {min}
    //                 <br/>
    //                 Steals: {stl}
    //                 <br/>
    //                 Blocks: {blk}
    //                 <br/>
    //                 FG%: {fg_pct}
    //                 <br/>
    //                 FT%: {ft_pct}
    //                 <br/>
    //                 3P%: {fg3_pct}
    //                 <br/>
    //                 3PM: {fg3m}
    //             </Card.Text>
    //             :
    //             "Loading..."
    //             }
    //             </>
    //         }
    //       </Card.Body>
    //     </Card>)) : <h1>Loading...</h1>
        <h1>Im the Player Page</h1>
    }

    
    </>
    );
}

export default PlayerPage;