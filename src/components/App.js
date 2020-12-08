import Player from "./Player";
import Header from "./Header";
import Reset from "./Reset";
import WinMessage from "./Winner";
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
      <Header text={ text.game }/>

      {/* scores */}
      <div className="row mb-4">
          <Player
            playerText={ text.player } // this has to be passed in as an own prop
            servingText={ text.serving } // this has to be passed in as an own prop
            player={ 1 } // this has to be passed in as an own prop
            servingPlayer={ servingP1 } // || this can be dealt with at the wrapper
            playerScore={ player1 } // || this can be dealt with at the wrapper
            playerIncrement={ player1Increment } 
            winner={ winner } // this can be dealt with at the wrapper
          />

          <Player
            playerText={ text.player }
            servingText={ text.serving }  
            player={ 2 }
            servingPlayer={ !servingP1 }
            playerScore={ player2 }
            playerIncrement={ player2Increment }
            winner={ winner }
          />
      </div>

      { /* winner message */}
      <WinMessage 
        playerText={ text.player }
        winsText={ text.wins }
      />

      <hr />

      { /* reset button */}
      <Reset 
        text={ text.reset }
        handleClick={ resetScore }
      />

      <hr />

      { /* game history table */ }
      <ResultsTable />
  </>
);

export default App;
