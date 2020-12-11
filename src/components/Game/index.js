import { connect } from "react-redux";
import Game from "./Game";

const mapStateToProps = state => {
    return {
        inProgress: state.inProgress,
    };
};

export default connect(mapStateToProps)(Game);