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

export const playerScores = ( { servingP1, player1Won, player2Won, playerNum } ) => {
    let gameWon = player1Won || player2Won;
    let winner = player1Won ? 1 : 2;
    return {
        type: playerNum === 1 ? "PLAYER_1" : "PLAYER_2",
        servingP1: servingP1,
        winner: gameWon ? winner : 0,
    }
};

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