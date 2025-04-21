import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const IncrementCount = () => {
        setCount(count + 1);

    }
    const decrementCount = () => {
        setCount(count -1);
    }
    const resetCount = () => {
        setCount(0);
    }
  return (
    <div className='counter-container'>
        <p className='count-display'> {count}</p>
        <button className='counter-button' onClick={decrementCount}> Decrement</button>
        <button className='counter-button' onClick={IncrementCount}> Increment</button>
        <button className='counter-button' onClick={resetCount}> Reset</button>
    </div>
  )
}

export default Counter
