export const reset = () => (
    {
        type: "RESET",
    }
);

export const language1 = () => (
    {
        type: "LANGUAGE_1",
    }
);

export const language2 = () => (
    {
        type: "LANGUAGE_2",
    }
);

export const playerScores = ( { response, playerNum } ) => (
    {
        type: playerNum === 1 ? "PLAYER_1" : "PLAYER_2",
        response: response,
    }
);

export const saveSettings = data => (
    {
        type: "SAVE_SETTINGS",
        player1Name: data.player1Name,
        player2Name: data.player2Name,
        winningScore: data.winningScore,
        alternateAt: data.alternateAt,
        id: data.id,
    }
);

export const loaded = ({ id }) => (
    {
        type: "LOADED",
        id: id,
    }
);