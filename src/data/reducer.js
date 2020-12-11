import initialState from "./initial";

// Reducer functions
const player1 = ( state, action ) => ({
  ...state, 
  player1: state.player1 + 1,
  winner: action.winner,
  servingP1: action.servingP1,
});

const player2 = ( state, action ) => ({
  ...state, 
  player2: state.player2 + 1,
  winner: action.winner,
  servingP1: action.servingP1,
});

const server = state => {
  
  const { 
    servingP1, 
    player1, 
    player2, 
    alternateAt, 
    winningScore 
  } = state;

  let deuce = winningScore - 1;

  let modulo = player1 >= deuce && player2 >= deuce ? 2 : alternateAt;
  let serveChange = (player1 + player2) % modulo === 0;

  return {
    ...state,
    servingP1: serveChange ? !servingP1 : servingP1,
  }
};

const winner = state => {
  const { winner, player1, player2, winningScore } = state;

  if (winner > 0 ) {
    return { ...state };
  } 
  else if ( player1 >= winningScore && player1 - player2 > 1 ) {
    return { ...state, winner: 1 };
  } 
  else if ( player2 >= winningScore && player2 - player1 > 1 ) {
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

  const { player1Name, player2Name, winningScore, alternateAt, id } = action;
  
  return {
    ...state,
    player1Name,
    player2Name,
    winningScore: +winningScore,
    alternateAt: +alternateAt,
    id: +id,
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

const apiHistory = (state, action) => {
  let completeGames = action.gameHistory.filter( game => game.complete );
  let updatedHistory = [];

  completeGames.forEach( game => {
    updatedHistory.push(
      {
        player_1: {
          score: game.player_1.score,
          won: game.player_1.won,
          name: game.player_1.name
        },
        player_2: {
          score: game.player_2.score,
          won: game.player_2.won,
          name: game.player_2.name
        },
      }
    );  
  });

  return {
    ...state,
    gameHistory: updatedHistory,
    loaded: true,
  } 
}


// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER_1": return player1(state, action);
    case "PLAYER_2": return player2(state, action);
    case "RESET": return reset(state);
    case "LANGUAGE_1": return { ...state, language: 1 }
    case "LANGUAGE_2": return { ...state, language: 2 }
    case "SAVE_SETTINGS": return gameSettings(state, action);
    case "UPDATE_HISTORY": return apiHistory(state, action);
    default : return state;
  }
};

export default reducer;