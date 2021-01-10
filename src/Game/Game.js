import React from 'react';
import Progress from '../Progress/Progress';
import Letters from '../Letters/Letters';
import Hangman from '../Hangman/Hangman';
import styles from './Game.module.css';
import * as bank from '../reducer/bank';

let nth = 1;
const debug = false;

const Game = props => {		

	// Reset game when game is restarted	
	const resetGameHandler = () => {
		props.next(1);	
	};

	//If player solves current riddle and it is not the last one
	if (props.state.solved && !props.state.finished) {
		// then play the next riddle and try to finish
		props.next(++nth);
		//props.next(20);
		props.finish(nth);
		//props.finish(20);
	}

	let modal = null;
	if (props.state.lives === 0)
	{
		modal = <React.Fragment>
					<div className={styles.overlay}></div>
					<div className={styles.askforrestart + ' ' + styles.shake} onClick={resetGameHandler} >RESTART?</div>
				</React.Fragment>;
	}

	if (props.state.solved && props.state.finished) {
		modal = <React.Fragment>
					<div className={styles.overlay}></div>
					<div className={styles.askforrestart + ' ' + styles.shake} onClick={resetGameHandler} >YOU WIN!</div>
				</React.Fragment>;	
	}

	return (
		<React.Fragment>
			{modal}
			<div>
				<Hangman lives={props.state.lives} />
				<Progress solution={props.state.solution} correctLetters={props.state.correct_letters} />
				<Letters isSolved={props.state.solved} solved={props.solved} solution={props.state.solution} 
					correct={props.correct} wrong={props.wrong} lives={props.state.lives} />
				<div>({nth}/{bank.BANK.length}) Hint: {props.state.hint}</div>

				<React.Fragment>{debug ? JSON.stringify(props.state) : null}</React.Fragment>							
			</div>
		</React.Fragment>
	);
};

export default Game;