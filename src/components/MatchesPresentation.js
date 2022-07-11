import Table from 'react-bootstrap/Table'


function MatchesPresentation(props) {
    return (

        <div >
            <Table variant="dark">

                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Teams</th>
                        <th>Score</th>
                        <th>Events</th>
                    </tr>
                </thead>
                <tbody>

                        {props.data.map(match => (
                            <tr key={match.id}>
                                <td>{match.date}</td>
                                <td>{match.homeTeam} - {match.awayTeam} </td>
                                <td>{match.homeScore} - {match.awayScore}   </td>
                                <td>{match.events}</td>
                            </tr>))}
                

                </tbody>

            </Table>
        </div>
    )
}

export default MatchesPresentation;
