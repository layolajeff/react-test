import React, { useState } from "react";

function Counter() {
    const [cart, setCart] = useState ({ 
        item: "apple", 
        quantity: 0,
    });

function addApple () {
    setCart(prevValue)
}

    return (
        <div>
            <button onClick={() => null}>-</button>
            {cart.quantity}
            <button onClick={() => null}>+</button>
        </div>
    )
}

export default Counter;