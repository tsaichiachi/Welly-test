import React from 'react';

function ConditionalRendering({ isLoggedIn }) {
    return (
        <div>
            <h1>React question 4</h1>
            {isLoggedIn ? (
                <p>Welcome, user!</p>
            ) : (
                <p>Please log in to view this content.</p>
            )}
            {/* 根據 isLoggedIn 的值，如果為 true，則顯示 "Welcome, user!"，否則顯示 "Please log in to view this content."。使用了三元運算子來進行條件渲染。  */}
        </div>
    );
}

export default ConditionalRendering;
