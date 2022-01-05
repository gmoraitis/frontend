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

                    <tr>
                        <td>{props.data[0].date}</td>
                        <td>{props.data[0].homeTeam} - {props.data[0].awayTeam}</td>
                        <td>{props.data[0].homeScore} - {props.data[0].awayScore}</td>
                        <td colSpan={1}>{props.data[0].events}</td>
                    </tr>
                    <tr>
                        <td>{props.data[1].date}</td>
                        <td>{props.data[1].homeTeam} - {props.data[1].awayTeam}</td>
                        <td>{props.data[1].homeScore} - {props.data[1].awayScore}</td>
                        <td colSpan={1}>{props.data[1].events}</td>
                    </tr>
                    <tr>
                        <td>{props.data[2].date}</td>
                        <td>{props.data[2].homeTeam} - {props.data[2].awayTeam}</td>
                        <td>{props.data[2].homeScore} - {props.data[2].awayScore}</td>
                        <td colSpan={1}>{props.data[2].events}</td>
                    </tr>
                    <tr>
                        <td>{props.data[3].date}</td>
                        <td>{props.data[3].homeTeam} - {props.data[3].awayTeam}</td>
                        <td>{props.data[3].homeScore} - {props.data[3].awayScore}</td>
                        <td colSpan={1}>{props.data[3].events}</td>
                    </tr>
                    <tr>
                        <td>{props.data[4].date}</td>
                        <td>{props.data[4].homeTeam} - {props.data[4].awayTeam}</td>
                        <td>{props.data[4].homeScore} - {props.data[4].awayScore}</td>
                        <td colSpan={1}>{props.data[4].events}</td>
                    </tr>
                </tbody>

            </Table>
        </div>
    )
}

export default MatchesPresentation;
