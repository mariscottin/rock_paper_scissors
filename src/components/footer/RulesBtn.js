import React from 'react';

import './RulesBtn.css';

const RulesBtn = (props) => {
    return(
        <div className="rules-button__container">
            <div className="rules-btn" onClick={()=> props.toggleModal()}>
                RULES
            </div>
        </div>
    )
}

export default RulesBtn;