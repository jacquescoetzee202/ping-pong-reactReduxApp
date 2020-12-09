import Form from "./Form";

import { connect } from "react-redux";
import { saveSettings } from "../../data/actions";
import translate from "../../language/translate";

const mapStateToProps = state => {
    const { player1Name, player2Name, winningScore, alternateAt } = state;
    return {
        player1Name,
        player2Name,
        winningScore,
        alternateAt,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startGame: data => dispatch(saveSettings(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);