import React from 'react';
import ReactLoading from 'react-loading';

import './NoAvatar.css';

const NoAvatar = () => {
    
    return(
        <div className="no-avatar__container" >
            <div className='no-avatar'>
                <ReactLoading type='cylon' color='#fff' height={100} width={100} className="loading-avatar"/>
            </div>
        </div>
    )
}

export default NoAvatar;