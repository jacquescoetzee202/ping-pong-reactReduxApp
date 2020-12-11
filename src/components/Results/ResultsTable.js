import Table from 'react-bootstrap/Table';

const ResultsTable = ({ results, headings }) => {

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    { headings.map(( heading => (
                        <th>{ heading }</th>
                    )))}
                </tr>
            </thead>
            <tbody>
                { results.map((result, index) => {
                    let player1wins = result.player_1.won;
                    let player1Score = result.player_1.score;
                    let player2Score = result.player_2.score;
                    let player1Name = result.player_1.name;
                    let player2Name = result.player_2.name;
                    return (
                        <tr key={index}>
                            <td>
                                { index + 1 }
                            </td>
                            <td>
                                { player1wins ? player1Name : player2Name }
                            </td>
                            <td>
                                { player1wins ? player2Name : player1Name }
                            </td>
                            <td>
                                { player1wins ? player1Score : player2Score } 
                                - 
                                { player1wins ? player2Score : player1Score }
                            </td>
                        </tr>
                    );
                 })}
            </tbody>
        </Table>
    );
};

export default ResultsTable;