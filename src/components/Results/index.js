import { connect } from "react-redux";
import ResultsTable from "./ResultsTable";
import translate from "../../language/translate";

const mapStateToProps = state => {
    
    const headings = ["match","winner","looser","score"];
    let translated = headings.map( heading => translate(state.language, heading));
    

    return {
        results: state.gameHistory,
        player1Text: state.player1Name,
        player2Text: state.player2Name,
        headings: translated,
    };
};



export default connect(mapStateToProps)(ResultsTable);