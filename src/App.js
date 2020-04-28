import React, { useState } from "react";
import "./App.css";

function App() {
    const [isFlip, setIsFlip] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <div class="scene">
                    <div className="card__face card__face--inside">
                        La verdad es que sos una persona bellisima, sos valida y
                        te quiero mucho, nunca cambies 😘
                    </div>
                    <div
                        className={`card ${isFlip && "is-flipped"}`}
                        onClick={() => setIsFlip(!isFlip)}
                    >
                        <div class="card__face card__face--front">
                            Dentro está una verdad muy dura
                        </div>
                        <div class="card__face card__face--back"></div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
