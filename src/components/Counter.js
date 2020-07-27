import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleChange = (e) => {
        setCount(Number(e.target.value));
    }

    console.log(typeof (count));

    return (
        <div>
            <div className='container'>
                <p>Please set a start value: </p>
                <input onChange={handleChange} type="number">
                </input>
            </div>
            <p>The counter is at : {count}</p>
            <button onClick={() => setCount(count + 1)}>
                +1
          </button>
            <button onClick={() => setCount(count - 1)}>
                -1
          </button>
        </div>
    );

}

export default Counter;