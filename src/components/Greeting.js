import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    };

    return (
        <React.Fragment>
            <h1>Hello, world!</h1>
            {!changedText ? (
                <Output>It's good to see you.</Output>
            ) : (
                <Output>Changed!</Output>
            )}
            <button onClick={changeTextHandler}>Change text</button>
        </React.Fragment>
    );
};

export default Greeting;
