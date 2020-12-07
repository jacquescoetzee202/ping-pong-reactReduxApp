import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from "redux";

// initial state
const initial = {
  player1: 0,
  player2: 0,
  servingP1: true,
  winner: 0,
  gameHistory: [],
}
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
        player2: {
          score: player2,
          won: winner === 2
        },
      }
    ]
  } 
}

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER_1": return history(winner(server(player1(state))));
    case "PLAYER_2": return history(winner(server(player2(state))));
    case "RESET": return { ...initial, gameHistory: state.gameHistory };
    default : return state;
  }
};

const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  
);

const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App
        player1={ state.player1 }
        player2={ state.player2 }
        servingP1={ state.servingP1 }
        winner={ state.winner }
        player1Increment={ () => store.dispatch({ type: "PLAYER_1" }) }
        player2Increment={ () => store.dispatch({ type: "PLAYER_2" }) }
        resetScore={ () => store.dispatch({ type: "RESET" }) }
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render); // render on state change
render(); // get the page to render first time before any state changes

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
