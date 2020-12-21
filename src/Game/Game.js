import React from 'react';

const Game = props => {
	return (
		<div>
			{JSON.stringify(props.state)}
		</div>
	);
};

export default Game;