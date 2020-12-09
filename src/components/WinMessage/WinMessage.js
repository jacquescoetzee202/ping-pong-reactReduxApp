import translate from "../../language/translate";

const WinMessage = ({ playerText, winsText, winner, language }) => (
    <h2 className={`alert alert-success ${ winner > 0 ? "" : "d-none" }`}
    >
        { translate(language, "player") } { winner } { translate(language, "wins") }!
    </h2>
);

export default WinMessage;