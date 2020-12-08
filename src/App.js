import Player from "./components/Player";
import Header from "./components/Header";
import Reset from "./components/Reset";
import WinMessage from "./components/WinMessage";
import Language from "./components/Language";

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
            playerText={ text.player }
            servingText={ text.serving } 
            player={ 1 }
            servingPlayer={ servingP1 }
            playerScore={ player1 }
            playerIncrement={ player1Increment }
            winner={ winner }
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
        winner={ winner }
      />

      <hr />

      { /* reset button */}
      <Reset 
        text={ text.reset }
        handleClick={ resetScore }
      />
  </>
);

export default App;
