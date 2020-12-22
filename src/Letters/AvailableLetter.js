import React from 'react';

const AvailableLetter = props => {
	const setStuff = () => {
	  // first disable clicked letter
	  props.updateClicked();

	  // housekeeping according to player's choice
      if (props.play()) {
        props.correct();
      }
      else {
        props.wrong();
      }

      // did player win? decide.
      props.solved();
    };

    return (
    	<span style={{padding: "1em"}} onClick={setStuff}>{props.alphabet}</span>
    );
}

export default AvailableLetter;