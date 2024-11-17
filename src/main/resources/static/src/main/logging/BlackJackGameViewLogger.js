
// the purpose of this class is to log information about data about the `Game`
class BlackJackGameViewLogger {
    constructor(blackJackGameView) {
        this.blackJackGameView = blackJackGameView;
    }

    clearGameOptions() {
        log("Clearing game options...");
        this.blackJackGameView.clearGameOptions();
        log("Cleared game options.");
    }

    createPlayersView() {
        log("Creating players view...");
        this.blackJackGameView.createPlayersView();
        log("Created player view.");
    }

    updatePoints() {
        log("Updating points...")
        this.blackJackGameView.updatePoints();
        log("Updated points.");
    }


    setNumberOfCardsOnScreen() {
        log("Setting number of cards on screen...");
        this.blackJackGameView.setNumberOfCardsOnScreen();
        log("Set number of cards on screen.");
    }

    endGame() {
        log("Ending game...");
        this.blackJackGameView.endGame();
        log("Game ended.");
    }

    removeActiveOnCurrentPlayer() {
        log("Removing active on current player...");
        this.blackJackGameView.removeActiveOnCurrentPlayer();
        log("Removed active on current player.");
    }

    setActiveOnCurrentPlayer() {
        log("Setting active on current player...");
        this.blackJackGameView.setActiveOnCurrentPlayer();
        log("Set active on current player.");
    }
}