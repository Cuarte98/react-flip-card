import React from "react";
import "./Flippy.css";

export const Flippy = (props) => {
    const insideText =
        "La verdad es que sos una persona bellisima, sos valida y te quiero mucho, nunca cambies";
    const frontText = "Dentro está una verdad muy dura";

    return (
        <div className="scene" onClick={props.onClick}>
            <div className="card__face card__face--inside"> {insideText}</div>
            <div className={`card ${props.isOpen && "is-flipped"}`}>
                <div className="card__face card__face--front">{frontText}</div>
                <div className="card__face card__face--back"></div>
            </div>
        </div>
    );
};

Flippy.defaultProps = {
    isOpen: true,
    onClick: () => {},
};
