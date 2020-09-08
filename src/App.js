import React, { Component } from "react";
import Header from "./components/header";
import Card from "./components/card";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    highScore: 0,
    currentScore: 0,
    showAlert: 0,
    showSuccess: 0,
    selectedCards: [],
  };

  shuffle = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };

  selectCard = (id) => {
    let selectedCards = this.state.selectedCards;
    let currentScore = this.state.currentScore;
    let highScore = this.state.highScore;

    this.setState({
      showAlert: 0,
    });

    if (selectedCards.indexOf(id) === -1) {
      selectedCards.push(id);
      console.log(selectedCards);

      this.handleIncrement();
      this.shuffleDeck();
    } else if (this.state.currentScore === 12) {
      this.setState({
        showSuccess: 1,
        currentScore: 0,
        selectedCards: [],
      });
    } else {
      this.setState({
        currentScore: 0,
        selectedCards: [],
      });

      this.setState({
        showAlert: 1,
      });
    }

    if (currentScore >= highScore) {
      this.setState({
        highScore: currentScore + 1,
      });
    }
  };

  handleIncrement = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  shuffleDeck = () => {
    this.setState({ cards: this.shuffle(cards) });
  };

  render() {
    return (
      <div className="App">
        <div className="gameboardWrapper">
          <Header
            title="React Clicky Game"
            currentScore={this.state.currentScore}
            highScore={this.state.highScore}
          />

          <div
            className={this.state.showAlert === 1 ? "alert active" : "alert"}
          >
            <p>Oh! Double-click! Nice try, though.</p>
          </div>
          <div
            className={this.state.showSuccess === 1 ? "alert active" : "alert"}
          >
            <p>Very nice! All the way through and no double-clicks.</p>
          </div>

          <div className="gameboardCards">
            {this.state.cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                image={card.image}
                selectCard={this.selectCard}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
