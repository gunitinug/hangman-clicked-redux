export function setSolved() {
	return {
		type: 'SET_SOLVED'
	}
}

export function guessedCorrect( letter ) {
	return {
		type: 'GUESSED_CORRECT',
		letter
	}
}

export function guessedWrong( letter ) {
	return {
		type: 'GUESSED_WRONG',
		letter
	}
}

export function playNext( nth ) {
	return {
		type: 'PLAY_NEXT',
		nth
	}
}

export function finished( nth ) {
	return {
		type: 'FINISHED',
		nth
	}
}

export function restarted( b ) {
	return {
		type: 'RESTARTED',
		b
	}
}