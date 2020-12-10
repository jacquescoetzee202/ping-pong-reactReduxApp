import { useState } from "react";
import axios from "../../axios-config";
import { saveSettings } from "./state";

export const postGame = ( formState ) => {
    const { player1Name, player2Name, winningScore, alternateAt } = formState;
    return ( dispatch ) => {
        axios.post("/", {
            "player_1": player1Name,
            "player_2": player2Name,
            "winning_score": winningScore,
            "change_serve": alternateAt
        }).then(({ data }) => {
            dispatch(saveSettings({ ...formState, id: data.data.id }));
        });
    }
}

export const patchScore = playerNum => {
    return ( dispatch, getState ) => {
        axios.patch(`${id}/score`, {
            "player": playerNum
        }).then(({ data }) => {
            dispatch(playerScore({ ...data.data }));
        });
    }

}

