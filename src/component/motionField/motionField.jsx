import React, {useContext, useState} from 'react';
import cl from "../UI/clickZone/clickZone.module.css";
import ZeroImage from "../../Images/zero.png";
import CrossImage from "../../Images/cross.png";
import Context from "../../index";
import winAction from "../../frameworks/winAction";

const MotionField = (props) => {
    const {whoIsMotion, setWhoIsMotion, setWhoIsWinner, whoIsWinner} = useContext(Context);
    const [image, setImage] = React.useState(null);
    const [isClicking, setIsClicking] = useState(false);
    return (
        <button key={props} className={cl.button} onClick={() => {
            if (!isClicking) {
                if (whoIsWinner === null) {
                    console.log('click')
                    if (whoIsMotion === 'tick') {
                        setImage(ZeroImage)
                        winAction.addClick(props.i, 'tick')
                        if (winAction.isWhoseWinner('tick') === true) {
                            setWhoIsWinner('zero')
                        }
                        setWhoIsMotion('cross');
                    } else {
                        setImage(CrossImage)
                        winAction.addClick(props.i, 'cross')
                        if (winAction.isWhoseWinner('cross') === true) {
                            setWhoIsWinner('cross')
                        }
                        setWhoIsMotion('tick');
                    }
                    console.log(whoIsMotion);
                    setIsClicking(true);
                }
            }
        }}><img src={image} alt={props.toString()}/></button>
    );
};

export default MotionField;