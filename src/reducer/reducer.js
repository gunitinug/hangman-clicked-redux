const bank = ['depth',  'forgetting',   'example',  'educate',
'entire',   'horizon',  'freight',  'earliest',
'threat',   'relieve',  'muscle',   'meant',
'exchange',     'securing',     'obedient',     'unsanitary',
'leisure',  'crypt',    'supervisor',   'persuade',
];

const hints = ['the distance from the top or surface to the bottom of something.',  'fail to remember.',    'a thing characteristic of its kind or illustrating a general rule.',   'give intellectual, moral, and social instruction to (someone), typically at a school or university.',
'with no part left out; whole.',    'the line at which the earth\'s surface and the sky appear to meet.',    'goods transported in bulk by truck, train, ship, or aircraft.',    'happening or done before the usual or expected time.',
'a statement of an intention to inflict pain, injury, damage, or other hostile action on someone in retribution for something done or not done.',   'cause (pain, distress, or difficulty) to become less severe or serious.',  'physical power; strength.',    'intend to convey or refer to (a particular thing); signify.',
'an act of giving one thing and receiving another (especially of the same kind) in return.',    'fix or attach (something) firmly so that it cannot be moved or lost.',     'complying or willing to comply with an order or request; submissive to another\'s authority.',     'not sanitary.',
'time when one is not working or occupied; free time.',     'an underground room or vault beneath a church, used as a chapel or burial place.',     'a person who supervises a person or an activity.',     'induce (someone) to do something through reasoning or argument.'];

const game = {
	solution: 'depth',
    hint: 'the distance from the top or surface to the bottom of something.',
	available_letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
	correct_letters: [],
	lives: 11,
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
        const next_hint = hints[action.nth-1];

        return {
            ...game, solution: next_solution, hint: next_hint
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
