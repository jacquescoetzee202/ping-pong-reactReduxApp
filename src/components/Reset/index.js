import { connect } from "react-redux";
import Reset from "./Reset";
import translate from "../../language/translate";

const mapStateToProps = (state, { handleClick } ) => {
    return {
        text: translate(state.language, "reset"),
        handleClick: handleClick,
    };
};

export default connect(mapStateToProps)(Reset);