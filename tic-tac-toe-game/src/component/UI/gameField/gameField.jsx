import React from 'react';
import cl from './gameField.module.css'
import Context from "../../../index";

const GameField = () => {
    const ref = React.useRef();

    React.useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#BFC6C4';
        ctx.lineWidth = '3'
        ctx.beginPath();
        ctx.moveTo(100, 0);
        ctx.lineTo(100, 150);

        ctx.moveTo(200, 0);
        ctx.lineTo(200, 150);
        ctx.stroke()

        ctx.lineWidth = '1'
        ctx.beginPath();
        ctx.moveTo(0, 100);
        ctx.lineTo(300, 100);

        ctx.moveTo(0, 50);
        ctx.lineTo(300, 50);
        ctx.stroke()
    }, []);
    return (
        <canvas ref={ref} id='canvas' className={cl.canvas}></canvas>
    );
};

export default GameField;