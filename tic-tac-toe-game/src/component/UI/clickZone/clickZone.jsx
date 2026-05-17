import React from 'react';
import cl from './clickZone.module.css';
import MotionField from "../../motionField/motionField";

const ClickZone = () => {
    const buttons = Array(9).fill(null).map((i,_) => _++)
    return (
        <div className={cl.clickZone}>
            {
                buttons.map((i) => {
                    return (
                        <MotionField i={i} key={i}/>
                    )
                })
            }
        </div>
    );
};

export default ClickZone;