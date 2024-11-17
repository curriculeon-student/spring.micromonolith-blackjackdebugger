// the purpose of this class is to mediate the behaviors of `GameData` and `GameView`
class BlackJackGame {
    startblackjack() {        
        this.blackJackGameData = new BlackJackGameStateLogger();
        this.blackJackGameDataView = new BlackJackGameViewLogger(new BlackJackGameView(this.blackJackGameData));

        this.blackJackGameDataView.createPlayersView();
        this.blackJackGameData.play();        
        this.blackJackGameDataView.clearGameOptions();
        this.updateView();
    }

    updateView() {
        this.blackJackGameDataView.updatePoints();
        this.blackJackGameDataView.setNumberOfCardsOnScreen();
        this.blackJackGameDataView.setActiveOnCurrentPlayer();
    }

    hit() {
        this.blackJackGameData.hit();
        if(this.blackJackGameData.getCurrentPlayer().getHandTotal() >= 21) {
            this.blackJackGameDataView.endGame();
        }
    }

    stay() {
        // if the current player is the dealer
        if(this.blackJackGameData.isCurrentPlayerDealer()) {
            this.blackJackGameDataView.endGame();
        }
        this.blackJackGameDataView.removeActiveOnCurrentPlayer();
        this.blackJackGameData.setCurrentPlayer();
        this.updateView();
    }
}