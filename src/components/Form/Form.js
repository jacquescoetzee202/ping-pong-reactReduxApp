import { Component } from "react";

class Form extends Component{
    
    constructor(props) {
        super(props);

        const { player1Name, player2Name, winningScore, alternateAt } = this.props;

        this.state ={
            player1Name,
            player2Name,
            winningScore,
            alternateAt,
        }

        this.player1Input = this.player1Input.bind(this);
        this.player2Input = this.player2Input.bind(this);
        this.winInput = this.winInput.bind(this);
        this.alternateInput = this.alternateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    player1Input(event) {
        this.setState({
            player1Name: event.currentTarget.value,
        });
    }
    
    player2Input(event) {
        this.setState({
            player2Name: event.currentTarget.value,
        });
    }

    winInput(event) {
        this.setState({
            winningScore: event.currentTarget.value,
        });
    }

    alternateInput(event) {
        this.setState({
            alternateAt: event.currentTarget.value,
        });
    }

    handleSubmit(event){
        event.preventDefault();

        this.props.startGame({...this.state});
    }

    render() {
        const { player1Name, player2Name, winningScore, alternateAt } = this.state;

        const { 
            player1Txt,
            player2Txt, 
            winScoreTxt,
            alternateTxt,
            startTxt 
        } = this.props;

        return(
            <>
                <form className="container">
                    <div className="form-group">
                        <label htmlFor="player1">{ player1Txt }</label>
                        <input type="text" value={ player1Name } className="form-control" id="player1" onChange={ this.player1Input }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="player2">{ player2Txt }</label>
                        <input type="text" value={ player2Name } className="form-control" id="player2" onChange={ this.player2Input }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="winningScore">{ winScoreTxt }</label>
                        <input type="number" value={ winningScore } className="form-control" id="winningScore" onChange={ this.winInput }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="alternate">{ alternateTxt }</label>
                        <input type="number" value={ alternateAt } className="form-control" id="alternate" onChange={ this.alternateInput }/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={ this.handleSubmit }>{ startTxt }</button>
                </form>
            </>
        );
    }
}

export default Form;