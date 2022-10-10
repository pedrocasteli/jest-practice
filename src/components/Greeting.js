import React, { useState } from "react";

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    };

    return (
        <React.Fragment>
            <h1>Hello, world!</h1>
            {!changedText ? <p>It's good to see you.</p> : <p>Changed!</p>}
            <button onClick={changeTextHandler}>Change text</button>
        </React.Fragment>
    );
};

export default Greeting;
