import { connect } from "react-redux";
import Player from "./Player";
import translate from "../../language/translate";
import { patchScore } from "../../data/actions/api";

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
        playerIncrement: () => dispatch(patchScore(1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

