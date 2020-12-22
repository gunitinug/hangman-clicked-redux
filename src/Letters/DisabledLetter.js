import React from 'react';

const DisabledLetter = (props) => {
    return (
    <span style={{color: "red", padding: "1em"}}>{props.alphabet}</span>
    );
};

export default DisabledLetter;