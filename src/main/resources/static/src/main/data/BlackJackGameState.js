// the purpose of this class is to encapsulate data about the `Game`
class BlackJackGameState {
    constructor() {
        this.player = new BlackJackPlayer("Leon");
        this.dealer = new BlackJackPlayer("Dealer");
        this.players = [this.player, this.dealer];
        this.currentPlayer = this.player;
        this.deck = new Deck();
        this.deck.shuffle();
    }

    getDealer() {
        return this.dealer;
    }

    getPlayers() {
        return this.players;
    }
    
    getPlayer() {
        return this.player;
    }

    getDeck() {
        return this.deck;
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    isCurrentPlayerDealer() {
        return this.currentPlayer == this.dealer;
    }

    hit() {
        // pop a card from the this.deck to the current player
        // check if current player new points are over 21
        const currentPlayer = this.getCurrentPlayer();
        const topMostCard = this.getDeck().removeAndFetchTopMostCard();
        currentPlayer.addCard(topMostCard);
    }

    setCurrentPlayer() {
        // switch current player to next player
        if(this.currentPlayer == this.player) {
            this.currentPlayer = this.dealer;
        } else {
            this.currentPlayer = this.player;
        }
    }

    play() {
        const deck = this.deck;

        this.dealer.hit(deck);
        this.dealer.hit(deck);
        this.player.hit(deck);
        this.player.hit(deck);
    }

    getWinner() {
        const player = this.getPlayer();
        const dealer = this.getDealer();
        const playerHand = player.getHandTotal();
        const dealerHand = dealer.getHandTotal();
        const didPlayerBust = playerHand > 21;
        const didDealerBust = dealerHand > 21;
        const didPlayerHave21 = playerHand == 21;
        const didDealerHave21 = dealerHand == 21;
        const didNeitherBust = !didDealerBust && !didPlayerBust;
        const didPlayerWin = didNeitherBust && didPlayerHave21;
        const didDealerWin = didNeitherBust && didDealerHave21;

        if(didPlayerWin) {
            return player;
        } else if(didDealerWin) {
            return dealer;
        }

        return null;
    }

    getLoser() {
        const player = this.getPlayer();
        const dealer = this.getDealer();
        if(this.getWinner() == player) {
            return dealer;
        } else if(this.getWinner() == dealer) {
            return player;
        }
        return null;
    }

    toString() {
        return JSON.stringify(this);
    }
}

