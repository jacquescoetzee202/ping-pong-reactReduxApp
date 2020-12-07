const Player = ({ player, servingPlayer, playerScore, playerIncrement }) => {
    return (
        <div className="col-md-6 mt-4">
            <div className={`card text-center ${ servingPlayer ? "bg-dark text-white": "" }`}>
                <h5 className="card-header">Player { player }</h5>
                <div className="card-body">
                    <p className="card-text display-1">{ playerScore }</p>
                </div>
                <div className="card-footer">
                    <button 
                    className="form-control btn btn-success"
                    onClick={ playerIncrement }
                    >+</button>
                </div>
            </div>
        </div>
    );
}

export default Player;