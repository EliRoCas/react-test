import React, { useState } from 'react';

function Count() {
    // Se declara una nueva variable de estado, que se llama "count"
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You cliked {count} times </p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Count;