import Form from "./Form";

import { connect } from "react-redux";
import { saveSettings } from "../../data/actions";
import translate from "../../language/translate";

const mapDispatchToProps = dispatch => {
    return {
        startGame: data => dispatch(saveSettings(data)),
    }
};

export default connect(null, mapDispatchToProps)(Form);