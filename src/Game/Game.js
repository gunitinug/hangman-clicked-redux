import React from 'react';
import Progress from '../Progress/Progress';

const Game = props => {
	return (
		<div>
			<Progress solution={props.state.solution} correctLetters={props.state.correct_letters} />
		</div>
	);
};

export default Game;