import { connect } from "react-redux";
import Player from "./Player";

const mapStateToProps = (state, { playerText, servingText, player, playerIncrement }) => {
    return {
        servingPlayer: player === 1 ? state.servingP1 : !state.servingP1,
        playerScore: player === 1 ? state.player1 : state.player2,
        winner: state.winner,
        player,
        playerText,
        servingText,
        playerIncrement,
    };
};

export default connect(mapStateToProps)(Player);