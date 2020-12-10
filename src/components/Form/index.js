import Form from "./Form";

import { connect } from "react-redux";
import { saveSettings } from "../../data/actions/state";
import translate from "../../language/translate";
import { postGame } from "../../data/actions/api";

const mapStateToProps = state => {
    
    const { player1Name, player2Name, winningScore, alternateAt } = state;
    
    let wording = [ "player 1 name", "player 2 name", "winning score", "alternate every", "start game"];

    let translated = wording.map( word => ( translate( state.language, word ) ) );

    return {
        player1Name,
        player2Name,
        winningScore,
        alternateAt,
        player1Txt: translated[0],
        player2Txt: translated[1],
        winScoreTxt: translated[2],
        alternateTxt: translated[3],
        startTxt: translated[4],
    }
}


const mapDispatchToProps = dispatch => {
    return {
        startGame: data => dispatch(postGame(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);