import React from 'react';
import Progress from '../Progress/Progress';
import Letters from '../Letters/Letters';

let nth = 1;

const Game = props => {
	// If player solves cuurent riddle and it is not the last one
	if (props.state.solved && !props.state.finished) {
		// then play the next riddle and try to finish
		props.next(++nth);
		props.finish(nth);
	}

	return (
		<div>
			<Progress solution={props.state.solution} correctLetters={props.state.correct_letters} />
			<Letters isSolved={props.state.solved} solved={props.solved} solution={props.state.solution} correct={props.correct} wrong={props.wrong} />
			<div>{JSON.stringify(props.state)}</div>
			<div>{props.state.solved && props.state.finished ? 'finished' : 'still riddles remain'}</div>
		</div>
	);
};

export default Game;