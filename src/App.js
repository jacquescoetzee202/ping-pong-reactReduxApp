import Player from "./components/Player";

const App = ({ player1, player2, player1Increment, player2Increment, resetScore, servingP1, winner }) => (
  <>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
          <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
          <Player 
            player={ 1 }
            servingPlayer={ servingP1 }
            playerScore={ player1 }
            playerIncrement={ player1Increment }
            winner={ winner }
          />

          <Player 
            player={ 2 }
            servingPlayer={ !servingP1 }
            playerScore={ player2 }
            playerIncrement={ player2Increment }
            winner={ winner }
          />
      </div>

      { /* winner message */}
      <h2 className={`alert alert-success ${ winner > 0 ? "" : "d-none" }`}>Player { winner } wins!</h2>

      <hr />

      { /* reset button */}
      <button 
        className="btn btn-danger"
        onClick={ resetScore }
      >Reset</button>
  </>
);

export default App;
