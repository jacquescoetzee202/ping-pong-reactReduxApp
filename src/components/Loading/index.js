import { connect } from "react-redux";
import Loading from "./Loading";

const mapStateTopProps = ({ loaded }) => ({
    loaded: loaded,
});

export default connect(mapStateTopProps)(Loading);