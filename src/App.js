import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSolved, guessedCorrect, guessedWrong, playNext, finished } from './actions/actions';
import Game from './Game/Game';

class App extends Component {
  onSetSolved = () => {
    this.props.dispatch(setSolved());
  };

  onGuessedCorrect = (letter) => {
    this.props.dispatch(guessedCorrect(letter));
  };

  onGuessedWrong = (letter) => {
    this.props.dispatch(guessedWrong(letter));
  };

  onPlayNext = (nth) => {
    this.props.dispatch(playNext(nth));
  }

  onFinished = (nth) => {
    this.props.dispatch(finished(nth));
  }

  render() {
    return (
      <Game state={this.props.state} solved={this.onSetSolved} correct={this.onGuessedCorrect} 
        wrong={this.onGuessedWrong} next={this.onPlayNext} finish={this.onFinished} />
    );
  }
}

function mapStateToProps (state) {
  return { state };
}

export default connect(mapStateToProps)(App);
