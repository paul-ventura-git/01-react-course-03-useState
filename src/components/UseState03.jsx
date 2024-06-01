import React, { useState } from 'react';

function UseState03() {
    const [click, setClick] = useState([]);

    const addNumber = () => {
        setClick([
            ...click,
            {
                id: click.length,
                value: Math.random() * 10
            }
        ]);
    };

    return (
        <div>
            <ul>
                <button onClick={addNumber}>
                    Click me
                </button>
                {click.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>

        </div>
    );
}

export default UseState03;