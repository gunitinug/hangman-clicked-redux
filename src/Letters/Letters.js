import React, {useState} from 'react';
import AvailableLetter from './AvailableLetter';
import DisabledLetter from './DisabledLetter';

const Letters = props => {
	const [lettersMap, setLettersMap]=useState(
        {
            "a":false,"b":false,"c":false,"d":false,"e":false,"f":false,"g":false,"h":false,"i":false,"j":false,"k":false,"l":false,"m":false,"n":false,"o":false,"p":false,"q":false,"r":false,"s":false,"t":false,"u":false,"v":false,"w":false,"x":false,"y":false,"z":false
        }
    );

    const updateClickedHandler = (letter) => {
        setLettersMap(
            {
                ...lettersMap,[letter]:true
            }
        );
    };
    
    const playHandler = (alphabet) => {
        const solution = props.solution.split('');

        if (solution.indexOf(alphabet)<0)
        {
            // console.log('incorrect');
            return false;
        }
        else
        {
            // console.log('correct');
            return true;
        }
    }

    const renderedLetters = Object.keys(lettersMap).map(
        (letter,i)=>{
          if (!lettersMap[letter])     //letter is not yet clicked
          {
            return (
                <AvailableLetter updateClicked={()=>updateClickedHandler(letter)} solved={props.solved} play={()=>playHandler(letter)} correct={()=>props.correct(letter)} wrong={()=>props.wrong(letter)} alphabet={letter} key={i} />
            )
          }
          else                         //letter is clicked
          { 
            return (
                <DisabledLetter alphabet={letter} key={i} />
            )
          }
        }
    );

    return (
    	<div>{renderedLetters}</div>
    );
}

export default Letters;