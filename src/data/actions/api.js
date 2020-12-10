import { useState } from "react";
import axios from "../../axios-config";
import { saveSettings, playerScores } from "./state";

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
        const id = getState().id;
        axios.patch(`${id}/score`, {
            "player": playerNum
        }).then(({ data }) => {
            dispatch(playerScores({
                servingP1: data.data.player_1.serving,
                player1Won: data.data.player_1.won,
                player2Won: data.data.player_2.won,
                playerNum,
            }));
        });
    }

}

