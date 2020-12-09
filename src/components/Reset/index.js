import { connect } from "react-redux";
import Reset from "./Reset";

const mapStateToProps = (state, { playerText, winsText } ) => {
    return {
        playerText: playerText,
        winsText: winsText, 
        winner: state.winner,
        language: state.language, 
    };
};

export default connect(mapStateToProps)(Reset);