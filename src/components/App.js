import Player from "./Player";
import Header from "./Header";
import Reset from "./Reset";
import WinMessage from "./WinMessage";
import Language from "./Language";
import ResultsTable from "./Results";

const App = ({ player1, player2, player1Increment, player2Increment, resetScore, servingP1, winner, text, lang1Select, lang2Select }) => (
  <>
      {/* header */}
      <Language 
        text={ text.language }
        lang1Select={ lang1Select }
        lang2Select={ lang2Select }
      />
      <Header />

      {/* scores */}
      <div className="row mb-4">
          <Player
            playerText={ text.player } // this has to be passed in as an own prop
            servingText={ text.serving } // this has to be passed in as an own prop
            player={ 1 } // this has to be passed in as an own prop
            playerIncrement={ player1Increment } // own prop
          />

          <Player
            playerText={ text.player }
            servingText={ text.serving }  
            player={ 2 }
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
