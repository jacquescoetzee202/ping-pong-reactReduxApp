// this provides the link to the Provider component, giving access to the store
import { connect } from "react-redux";

import WinMessage from "./WinMessage";
import translate from "../../language/translate";

const mapStateToProps = state => {
    return {
        text: translate(state.language, `player ${state.winner} wins`),
        winner: state.winner,
    };
};

export default connect(mapStateToProps)(WinMessage);
