
const MatchesPresentation = ({ data }) => (
    <div className="App-header">
        <h1>Matches Presentation</h1>
        {Object.keys(data).map(text => {
            return (<h4>{data[text]}</h4>)
        })}
    </div>
);

export default MatchesPresentation;
