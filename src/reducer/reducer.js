const bank = ['my name is logan', 'i like coding', 'merrry xmas'];

const game = {
	solution: 'my name is logan',
	available_letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
	correct_letters: [],
	lives: 12,
	solved: false,
    finished: false
};

export default function reducer (state = { ...game }, action ) {
	if (action.type === 'SET_SOLVED')
	{
		// get rid of non-alphabet letters from solution and split it as an array
		const solution = state.solution.replace(/\s/g, '').replace(/-/g, '').split('');
		// sort correct letters alphabetically
        const compare = [ ...state.correct_letters ].sort();
        // get rid of duplicate letters from solution then alphabetically sort it
        const unique = solution.filter(
            (elem,index,self) => (index===self.indexOf(elem))
            ).sort();

        // compare
        const solved = JSON.stringify(unique) === JSON.stringify(compare);
        
    	// return updated state
    	return {
    		...state, ...{solved: solved}
    	};
    }

    if (action.type === 'GUESSED_CORRECT')
    {
		// remove letter from available letters
		const index = state.available_letters.indexOf(action.letter);
        let newAvailableLetters = [...state.available_letters];
        newAvailableLetters.splice(index,1);

        // add letter to correct letters
        let newCorrectUsedLetters = [...state.correct_letters];
        newCorrectUsedLetters.push(action.letter);

        // return updated state
        return {
        	...state, ...{ available_letters: newAvailableLetters, correct_letters: newCorrectUsedLetters }
        };
    }

    if (action.type === 'GUESSED_WRONG')
    {
		// get rid of letter from available letters
		const index = state.available_letters.indexOf(action.letter);
        let newAvailableLetters = [...state.available_letters];
        newAvailableLetters.splice(index,1);

        // we don't have used_letters prop any more
        //let newUsedLetters = [...this.state.usedLetters];
        //newUsedLetters.push(letter);

        // decrement lives
        const oldValueLives = state.lives;
        const newValueLives = oldValueLives - 1;

        // return updated state
        return {
            ...state, ...{ available_letters: newAvailableLetters , lives: newValueLives<0 ? 0 : newValueLives }
        };
    }

    if (action.type === 'PLAY_NEXT') {
        const next_solution = bank[action.nth-1];

        return {
            ...game, solution: next_solution
        };
    }

    if (action.type === 'FINISHED') {
        if (bank.length === action.nth) {
            return {
                ...state, finished: true
            };
        }

        else {
            return {
                ...state, finished: false
            }
        }
    }

    return state;
}
