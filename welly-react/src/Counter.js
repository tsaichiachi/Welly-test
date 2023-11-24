import React, { useState } from 'react';

const Counter = () => {
    // 使用useState來追蹤計數狀態，初始為0
    const [count, setCount] = useState(0);

    // 增加
    const increaseCount = () => {
        setCount(count + 1);
    };

    // 減少
    const decreaseCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>React question 5</h1>
            <h2>Counter: {count}</h2>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    );
};

export default Counter;