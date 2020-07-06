import React from 'react';

import './Avatar.css';

const Avatar = props => {
    
    return(
        <div className="avatar__container" >
            <div className={`avatar-border avatar__border-${props.color}`} id={props.id}>
                <div className="avatar-icon__container" >
                    <img src={props.icon} alt={props.alt}/>
                </div>
            </div>
        </div>
    )
}

export default Avatar;