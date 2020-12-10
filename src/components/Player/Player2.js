import { connect } from "react-redux";
import Player from "./Player";
import { player2 } from "../../data/actions/state";
import translate from "../../language/translate";

const mapStateToProps = (state, { playerIncrement }) => {
    return {
        servingPlayer: !state.servingP1,
        playerScore: state.player2,
        winner: state.winner,
        playerText: translate(state.language, "player 2"),
        servingText: translate(state.language, "serving"),
        playerIncrement,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        playerIncrement: () => dispatch(player2())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
