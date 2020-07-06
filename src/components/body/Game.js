import React, { useState } from 'react';
import Triangle from '../../assets/img/bg-triangle.svg'
import Avatar from './Avatar';
import NoAvatar from './NoAvatar';
import RockIcon from '../../assets/img/icon-rock.svg';
import ScissorsIcon from '../../assets/img/icon-scissors.svg';
import PaperIcon from '../../assets/img/icon-paper.svg';

import './Game.css';

const Game = (props) => {
    const [userPick, setUserPick] = useState();
    const [homePick, setHomePick] = useState();
    const [result, setResult] = useState();
    const avatarOptions = ["scissorsAvatar", "paperAvatar", "rockAvatar"];

    const onUserPick = (e) => {
        let pick;
        if (e.target.className.substr(0, 17) === 'avatar__container') {
            pick = e.target.childNodes[0].id
        } else {
            pick = e.target.id
        }
        setUserPick(pick);
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * avatarOptions.length);
            const house = avatarOptions[randomNumber];
            setHomePick(house);
            switch (pick) {
                case "scissorsAvatar":
                    if(house === "paperAvatar"){
                        setResult('win');
                        props.updateScore('win');
                    }else if(house === "rockAvatar"){
                        setResult('lose');
                        props.updateScore('lose');
                    }else{
                        setResult('draw');
                    };
                    break;
                case "paperAvatar":
                    if(house === 'rockAvatar'){
                        setResult('win');
                        props.updateScore('win');
                    }else if(house === 'scissorsAvatar'){
                        setResult('lose');
                        props.updateScore('lose');
                    }else{
                        setResult('draw');
                    };
                    break;
                case "rockAvatar":
                    if(house === 'scissorsAvatar'){
                        setResult('win');
                        props.updateScore('win');
                    }else if(house === 'paperAvatar'){
                        setResult('lose');
                        props.updateScore('lose');
                    }else{
                        setResult('draw');
                    }
                    break;
                default:
                    window.alert('Something went wrong. Please reload the page')
                    break;
            }
        }, 2000)
    };

    const playAgainHandler = () => {
        setUserPick();
        setHomePick();
        setResult();
    }

    return (
        <>
            {
                !userPick ?
                    <>
                        <div className="game-title__container">
                            <h3>Pick your weapon!</h3>
                        </div>
                        <div className="game__container">
                            <div className="game-triangle__container">
                                <img src={Triangle} alt="Background Triangle" />
                            </div>
                            <div className="scissors-avatar" onClick={onUserPick}>
                                <Avatar icon={ScissorsIcon} alt="Scissors Icon" color="yellow" id="scissorsAvatar" />
                            </div>
                            <div className="paper-avatar" onClick={onUserPick}>
                                <Avatar icon={PaperIcon} alt="Paper Icon" color="blue" id="paperAvatar" />
                            </div>
                            <div className="rock-avatar" onClick={onUserPick}>
                                <Avatar icon={RockIcon} alt="Rock Icon" color="red" id="rockAvatar" />
                            </div>
                        </div>
                    </>
                    :
                    <>

                        <div className="picked-game__container">
                            <div className="picked-avatar__container">
                                <div className="picked-avatar user-avatar">
                                    {userPick === "scissorsAvatar" &&
                                        <Avatar icon={ScissorsIcon} alt="Scissors Icon" color="yellow" />
                                    }
                                    {userPick === "paperAvatar" &&
                                        <Avatar icon={PaperIcon} alt="Paper Icon" color="blue" />
                                    }
                                    {userPick === "rockAvatar" &&
                                        <Avatar icon={RockIcon} alt="Rock Icon" color="red" />
                                    }
                                    <h5>You picked</h5>
                                </div>
                                <div className="picked-avatar house-avatar">
                                    {!homePick &&
                                        <NoAvatar />
                                    }
                                    {homePick === "scissorsAvatar" &&
                                        <Avatar icon={ScissorsIcon} alt="Scissors Icon" color="yellow" />
                                    }
                                    {homePick === "paperAvatar" &&
                                        <Avatar icon={PaperIcon} alt="Paper Icon" color="blue" />
                                    }
                                    {homePick === "rockAvatar" &&
                                        <Avatar icon={RockIcon} alt="Rock Icon" color="red" />
                                    }
                                    <h5>The house picked</h5>
                                </div>
                            </div>

                        </div>
                        {homePick &&
                            <div className="game-result__container">
                                {result !== 'draw' ?
                                    <h1>You {result}</h1>
                                    :
                                    <h1>{result}</h1>
                                }
                                <div className="play-again-btn" onClick={playAgainHandler}>Play Again</div>
                            </div>
                        }
                    </>
            }
        </>
    )
}

export default Game;