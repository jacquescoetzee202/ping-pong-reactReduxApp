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

export const player1 = () => (
    {
        type: "PLAYER_1",
    }
);

export const player2 = () => (
    {
        type: "PLAYER_2",
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