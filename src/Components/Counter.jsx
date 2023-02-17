import React, { useState } from 'react'
import './Counter.css'

export default function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    function handleInputChange(event) {
        const value = Number(event.target.value);
        setCount(value);
    }

    return (
        <div className='container'>
                <p className='number'>Chiffre : {count}</p>
                <div className='number__data'>
                    <input className='number__value' placeholder='Entrez un chiffre' type="number" value={count} onChange={handleInputChange} />
                    <button className='number__plus' onClick={increment}>+</button>
                    <button className='number__minus' onClick={decrement}>-</button>
                    <button className='number__reset' onClick={reset}>Reset</button>
                </div>
        </div>
    );
    }