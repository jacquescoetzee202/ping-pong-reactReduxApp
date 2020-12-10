import { connect } from "react-redux";
import Player from "./Player";
import { playerScores } from "../../data/actions/state";
import translate from "../../language/translate";

const mapStateToProps = (state, { playerIncrement }) => {
    return {
        servingPlayer: state.servingP1,
        playerScore: state.player1,
        winner: state.winner,
        playerText: translate(state.language, "player 1"),
        servingText: translate(state.language, "serving"),
        playerIncrement,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        playerIncrement: () => dispatch(playerScores(1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

