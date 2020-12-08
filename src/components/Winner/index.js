// this provides the link to the Provider component, giving access to the store
import { connect } from "react-redux";
import WinMessage from "./WinMessage";

const mapStateToProps = (state, { playerText, winsText } ) => {
    return {
        playerText: playerText,
        winsText: winsText, 
        winner: state.winner,
    };
};

export default connect(mapStateToProps)(WinMessage);
