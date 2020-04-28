import React, { useState } from "react";
import "./App.css";
import { Flippy } from "./Flippy";

function App() {
    const [isFlip, setIsFlip] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <Flippy
                    isOpen={isFlip}
                    onClick={() => {
                        console.log("hola");
                        setIsFlip(!isFlip);
                    }}
                />
            </header>
        </div>
    );
}

export default App;
