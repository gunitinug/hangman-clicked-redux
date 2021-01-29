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
    
    // Cache all images at once when game starts
    useEffect(() => {
        const cacheImages = async (srcArray) => {
            const promises = await srcArray.map((src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src=src;
                    img.onload=resolve();
                    img.onerror=reject();
                });
            });

            await Promise.all(promises);
            setLoading(false);
        };

        const imgs = [ zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven ];

        cacheImages(imgs);
    }, []);

    let loader = null;
    
    if (loading) {
        loader = <div>caching all images before game starts...</div>;
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
                <img src={hangmanImage} alt="hangman pic" />
            </div>
        </React.Fragment>
    );
}

export default Hangman;