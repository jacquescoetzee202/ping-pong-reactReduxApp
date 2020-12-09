import { connect } from "react-redux";
import Reset from "./Reset";
import { reset } from "../../data/actions";
import translate from "../../language/translate";

const mapStateToProps = (state, { handleClick } ) => {
    return {
        text: translate(state.language, "reset"),
        handleClick: handleClick,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(reset()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);