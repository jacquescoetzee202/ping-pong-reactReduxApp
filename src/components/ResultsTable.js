import Table from 'react-bootstrap/Table';

const ResultsTable = ({ results }) => {

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Game</th>
                <th>Winner</th>
                <th>Winning score</th>
                <th>Loosing score...LOOOSER!</th>
                </tr>
            </thead>
            <tbody>
                { results.map((result, index) => {
                    let winningScore;
                    let loosingScore;
                    let winner;
                    if( result.player_1.won ) {
                        winner = "Player 1";
                        winningScore = result.player_1.score;
                        loosingScore = result.player_2.score;
                    } else {
                        winner = "Player 2";
                        winningScore = result.player_2.score;
                        loosingScore = result.player_1.score;
                    }

                    return(
                        <tr key={index}>
                            <td>{ index + 1 }</td>
                            <td>{ winner }</td>
                            <td>{ winningScore }</td>
                            <td>{ loosingScore }</td>
                        </tr>
                 );}) }
            </tbody>
        </Table>
    );
};

export default ResultsTable;