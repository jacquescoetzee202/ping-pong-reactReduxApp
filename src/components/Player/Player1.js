import { connect } from "react-redux";
import Player from "./Player";
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

export default connect(mapStateToProps)(Player);

