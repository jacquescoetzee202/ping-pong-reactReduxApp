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
                { results.map((result, index) => (
                    <tr key={index}>
                        <td>{ index + 1 }</td>
                        <td>{ result.player_1.won ? "Player 1" : "Player 2" }</td>
                        <td>{ result.player_1.won ? result.player_1.score : result.player_2.score }</td>
                        <td>{ result.player_1.won ? result.player_2.score : result.player_1.score }</td>
                    </tr>
                 ))}
            </tbody>
        </Table>
    );
};

export default ResultsTable;