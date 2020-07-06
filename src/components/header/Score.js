import React from 'react';

import './Score.css';

const Score = (props) => {
    return(
        <div className="score__box">
            <h6>Score</h6>
            <p>{props.score}</p>
        </div>
    )
}

export default Score;