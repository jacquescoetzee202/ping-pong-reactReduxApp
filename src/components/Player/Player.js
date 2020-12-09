import Button from "./Button";
import Badge from 'react-bootstrap/Badge'

const Player = ({ servingPlayer, playerScore, playerIncrement, winner, playerText, servingText }) => {
    return (
        <div className="col-md-6 mt-4">
            <div className={`card text-center ${ servingPlayer ? "bg-dark text-white": "" }`}>
                <h5 className="card-header">{ playerText }</h5>
                <div className="card-body">
                    <p className="card-text display-1">{ playerScore }</p>
                </div>
                <div className="card-footer">
                    <Button 
                        handleClick={ playerIncrement }
                        won={ winner > 0 }
                    />
                    <Badge pill variant="primary">
                        
                        { servingPlayer ? servingText : "" }
                    </Badge>
                </div>
            </div>
        </div>
    );
}

export default Player;