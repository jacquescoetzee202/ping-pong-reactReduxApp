// this provides the link to the Provider component, giving access to the store
import { connect } from "react-redux";

import WinMessage from "./WinMessage";
import translate from "../../language/translate";

const mapStateToProps = state => {
    return {
        text1: translate(state.language, "player"),
        text2: translate(state.language, "wins"), 
        winner: state.winner,
    };
};

export default connect(mapStateToProps)(WinMessage);
