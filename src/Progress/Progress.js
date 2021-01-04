import React from 'react';
import styles from './Progress.module.css';

const Progress = props => {
	const solution = [...props.solution];
    const matched = [...props.correctLetters];
    // non-alphabetic letters
    matched.push(' ');
    matched.push('-');

    const unmatched = solution.filter(
        (item, index) => (!matched.includes(item))
    );

    const output = solution.map(
        (item, index) => (unmatched.includes(item) ? '_' : item)
    )

	return (
		<div className={ styles.progress }>{output.join('\xa0')}</div>
	);
}

export default Progress;