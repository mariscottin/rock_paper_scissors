import React from 'react';
import Score from './Score';

import './ScoreHeader.css';

const ScoreHeader = (props) => {
    return(
        <div className="score-header__container">
            <div className="score-header__box">
                <div className="score-header__title">
                    <h1>Rock</h1>
                    <h1>Paper</h1>
                    <h1>Scissors</h1>
                </div>
                <Score score={props.score}/>
            </div>
        </div>
    )
}

export default ScoreHeader;