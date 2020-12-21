import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSolved, guessedCorrect, gussedWrong } from './actions/actions';
import Game from './Game/Game';

class App extends Component {
  onSetSolved = () => {
    this.props.dispatch(setSolved());
  };

  onGuessedCorrect = (letter) => {
    this.props.dispatch(guessedCorrect(letter));
  };

  onGuessedWrong = (letter) => {
    this.props.dispatch(gussedWrong(letter));
  };

  render() {
    return (
      <Game state={this.props.state} solved={this.onSetSolved} correct={onGuessedCorrect} wrong={onGuessedWrong} />
    );
  }
}

function mapStateToProps (state) {
  return { state };
}

export default connect(mapStateToProps)(App);
