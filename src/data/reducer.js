import initialState from "./initial";

// Reducer functions
const player1 = state => ({ ...state, player1: state.player1 + 1});
const player2 = state => ({ ...state, player2: state.player2 + 1});

const server = state => {
  const { servingP1, player1, player2 } = state;
  let modulo = player1 >= 20 && player2 >= 20 ? 2 : 5;
  let serveChange = (player1 + player2) % modulo === 0;

  return {
    ...state,
    servingP1: serveChange ? !servingP1 : servingP1,
  }
};

const winner = state => {
  const { winner, player1, player2 } = state;

  if (winner > 0 ) {
    return { ...state };
  } 
  else if ( player1 >= 21 && player1 - player2 > 1 ) {
    return { ...state, winner: 1 };
  } 
  else if ( player2 >= 21 && player2 - player1 > 1 ) {
    return { ...state, winner: 2 };
  } else {
    return { ...state };
  }
}

const history = state => {
  if(state.winner === 0) {
    return state;
  }

  const { player1, player2, winner } = state;

  return {
    ...state,
    gameHistory: [ 
      ...state.gameHistory,
      {
        player_1: {
          score: player1,
          won: winner === 1
        },
        player_2: {
          score: player2,
          won: winner === 2
        },
      }
    ]
  } 
}

const gameSettings = (state, action) => {

  const { player1Name, player2Name, winningScore, alternateAt } = action.gameSettings;
  
  return {
    ...state,
    player1Name,
    player2Name,
    winningScore: +winningScore,
    alternateAt: +alternateAt,
    inProgress: !state.inProgress,
  }
}

const reset = state => {
  return {
  ...initialState, 
  gameHistory: state.gameHistory,
  inProgress: !state.inProgress,
  }
}

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER_1": return history(winner(server(player1(state))));
    case "PLAYER_2": return history(winner(server(player2(state))));
    case "RESET": return reset(state);
    case "LANGUAGE_1": return { ...state, language: 1 }
    case "LANGUAGE_2": return { ...state, language: 2 }
    case "SAVE_SETTINGS": return gameSettings(state, action);
    default : return state;
  }
};

export default reducer;