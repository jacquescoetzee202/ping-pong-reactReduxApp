import { connect } from "react-redux";
import ResultsTable from "./ResultsTable";

const mapStateToProps = state => {
    return {
        results: state.gameHistory,
        player1Text: "Jacques",
        player2Text: "LOOSER",
        headings: ["Game","Winner","Looser","Score"],
    };
};

export default connect(mapStateToProps)(ResultsTable);