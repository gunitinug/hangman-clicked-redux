import React from 'react';
import styles from './Letters.module.css';

const DisabledLetter = (props) => {
    return (
    <span className={ styles.disabledLetter }>{props.alphabet}</span>
    );
};

export default DisabledLetter;