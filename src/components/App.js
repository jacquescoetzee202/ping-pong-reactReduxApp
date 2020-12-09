import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
import Header from "./Header";
import Reset from "./Reset";
import WinMessage from "./WinMessage";
import Language from "./Language";
import ResultsTable from "./Results";

const App = ({ player1, player2, player1Increment, player2Increment, resetScore, servingP1, winner, text, lang1Select, lang2Select }) => (
  <>
      {/* header */}
      <Language 
        lang1Select={ lang1Select }
        lang2Select={ lang2Select }
      />
      <Header />

      {/* scores */}
      <div className="row mb-4">
          <Player1
            playerIncrement={ player1Increment } // own prop
          />

          <Player2
            playerIncrement={ player2Increment }
          />
      </div>

      { /* winner message */}
      <WinMessage />

      <hr />

      { /* reset button */}
      <Reset 
        handleClick={ resetScore }
      />

      <hr />

      { /* game history table */ }
      <ResultsTable />
  </>
);

export default App;
