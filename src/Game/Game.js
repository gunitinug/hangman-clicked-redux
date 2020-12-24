import React from 'react';
import Progress from '../Progress/Progress';
import Letters from '../Letters/Letters';

let nth = 1;

const Game = props => {
	// jump to next one if solved?
	if (props.state.solved) {
		props.next(++nth);
	}

	return (
		<div>
			<Progress solution={props.state.solution} correctLetters={props.state.correct_letters} />
			<Letters solved={props.solved} solution={props.state.solution} correct={props.correct} wrong={props.wrong} />
			<div>{JSON.stringify(props.state)}</div>
		</div>
	);
};

export default Game;