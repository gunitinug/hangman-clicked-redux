import React, {useState, useEffect} from 'react';

import styles from './Hangman.module.css';

import zero from '../images/zero.png';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';
import six from '../images/six.png';
import seven from '../images/seven.png';
import eight from '../images/eight.png';
import nine from '../images/nine.png';
import ten from '../images/ten.png';
import eleven from '../images/eleven.png';

const Hangman = (props) => {   

    const [loading,setLoading] = useState(true);
    
    // When the image finishes loading make loading... message disappear.
    const imageLoadedHandler = () => {
        setLoading(false);
    };

    // We want loading... message to reappear if we are about to draw a different hangman image.
    useEffect(()=>{
        setLoading(true);
    },[props.lives]);

    let loader = null;
    
    if (loading) {
        loader = <div>loading...</div>;
    }    

    let hangmanImage = zero;

    switch (props.lives)
    {
        case 10:
            hangmanImage=one;
            break;
        case 9:
            hangmanImage=two;
            break;
        case 8:
            hangmanImage=three;
            break;
        case 7:
            hangmanImage=four;
            break;
        case 6:
            hangmanImage=five;
            break;
        case 5:
            hangmanImage=six;
            break;
        case 4:
            hangmanImage = seven;
            break;
        case 3:
            hangmanImage = eight;
            break;
        case 2:
            hangmanImage = nine;
            break;
        case 1:
            hangmanImage = ten;
            break;
        case 0:
            hangmanImage = eleven;
            break;                      
        default:
            hangmanImage = zero;
    }
    
    return (
        <React.Fragment>
            {loader}
            <div className={styles.hangman}>
                <img src={hangmanImage} alt="hangman pic" onLoad={imageLoadedHandler} onError={imageLoadedHandler}/>
            </div>
        </React.Fragment>
    );
}

export default Hangman;