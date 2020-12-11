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