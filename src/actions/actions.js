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
