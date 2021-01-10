import React from 'react';
import Progress from '../Progress/Progress';
import Letters from '../Letters/Letters';
import Hangman from '../Hangman/Hangman';
import styles from './Game.module.css';

let nth = 1;

const Game = props => {	

	// Reset game when game is restarted
	// Not only you reset game you reset letters map too!
	const resetGameHandler = () => {
		props.next(1);
		props.restarted(true);
		props.restarted(false);
	};


	//If player solves current riddle and it is not the last one
	if (props.state.solved && !props.state.finished) {
		// then play the next riddle and try to finish
		props.next(++nth);
		props.finish(nth);
	}

	let modal = null;
	if (props.state.lives === 0)
	{
		modal = <React.Fragment>
					<div className={styles.overlay}></div>
					<div className={styles.askforrestart + ' ' + styles.shake} onClick={resetGameHandler} >RESTART?</div>
				</React.Fragment>;
	}

	return (
		<React.Fragment>
			{modal}
			<div>
				<Hangman lives={props.state.lives} />
				<Progress solution={props.state.solution} correctLetters={props.state.correct_letters} />
				<Letters isSolved={props.state.solved} solved={props.solved} solution={props.state.solution} 
					correct={props.correct} wrong={props.wrong} isRestarted={props.state.restarted} />
				<div>Hint: {props.state.hint}</div>
				<div>{JSON.stringify(props.state)}</div>
				<div>{props.state.solved && props.state.finished ? 'finished' : 'still riddles remain'}</div>
			</div>
		</React.Fragment>
	);
};

export default Game;