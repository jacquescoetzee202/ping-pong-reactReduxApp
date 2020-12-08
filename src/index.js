import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from "redux";

import initialState from "./data/initial";
import reducer from "./data/reducer";

const store = createStore(
  reducer,
  initialState,
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
