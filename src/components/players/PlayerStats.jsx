import Table from 'react-bootstrap/Table';

function PlayerStats({stats}) {
  return (
    <Table striped bordered hover>
      <thead>
        <h5>2021-2022</h5>
        <tr>
          <th>Min/G</th>
          <th>Pts</th>
          <th>Reb</th>
          <th>Stl</th>
          <th>Blk</th>
          <th>FG%</th>
          <th>FT%</th>
          <th>3P%</th>
          <th>3pm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{stats.min}</td>
          <td>{stats.pts}</td>
          <td>{stats.reb}</td>
          <td>{stats.stl}</td>
          <td>{stats.blk}</td>
          <td>{stats.fg_pct * 100}</td>
          <td>{stats.ft_pct * 100}</td>
          <td>{stats.fg3_pct * 100}</td>
          <td>{stats.fg3m}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default PlayerStats;