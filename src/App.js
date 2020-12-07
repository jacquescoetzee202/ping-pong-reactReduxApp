const App = ({ player1, player2, player1Increment, player2Increment, resetScore, servingP1 }) => (
  <>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
          <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
          <div className="col-md-6 mt-4">
              <div className={`card text-center ${ servingP1 ? "bg-dark text-white": "" }`}>
                  <h5 className="card-header">Player 1</h5>
                  <div className="card-body">
                      <p className="card-text display-1">{ player1 }</p>
                  </div>
                  <div className="card-footer">
                      <button 
                        className="form-control btn btn-success"
                        onClick={ player1Increment }
                      >+</button>
                  </div>
              </div>
          </div>

          <div className="col-md-6 mt-4">
              <div className={`card text-center ${ servingP1 ? "" : "bg-dark text-white" }`}>
                  <h5 className="card-header">Player 2</h5>
                  <div className="card-body">
                      <p className="card-text display-1">{ player2 }</p>
                  </div>
                  <div className="card-footer">
                      <button 
                        className="form-control btn btn-success"
                        onClick={ player2Increment }
                      >+</button>
                  </div>
              </div>
          </div>
      </div>

      { /* winner message */}
      <h2 className="alert alert-success">Player {/* winning player here */} wins!</h2>

      <hr />

      { /* reset button */}
      <button 
        className="btn btn-danger"
        onClick={ resetScore }
      >Reset</button>
  </>
);

export default App;
