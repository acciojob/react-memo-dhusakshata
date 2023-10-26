import React, { useState } from "react";

const Memo = () => {
    const [text, setText] = useState("");
    const [memo, setMemo] = useState([]);

    function submitMemo() {
        if (text.length > 0) {
            setMemo([...memo, text]);
            setText("");
        }
    }

    return (
        <div>
            <h3>Memo</h3>
            <input id="skill-input" onChange={e => setText(e.target.value)} value={text} />
            <button id="skill-btn" onClick={submitMemo}>Submit</button>
            <ul>
                {memo.map((ele, index) => (
                    <li key={`item-${index}`}>{ele}</li>
                ))}
            </ul>
        </div>
    );
};

export default Memo;
