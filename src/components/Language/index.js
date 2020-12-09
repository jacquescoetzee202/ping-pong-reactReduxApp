import { connect } from "react-redux";
import Language from "./Language";
import { language1, language2 } from "../../data/actions";
import translate from "../../language/translate";

const mapStateToProps = (state, { lang1Select, lang2Select }) => {
    return {
        text: translate(state.language, "language"),
        lang1Select,
        lang2Select,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        lang1Select: () => dispatch(language1()),
        lang2Select: () => dispatch(language2()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Language);