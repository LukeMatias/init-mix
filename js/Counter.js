import React, {useState} from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleSuma = ()=>{
        setCounter(counter + 1)
    }
    const handleResta = ()=>{
        setCounter(counter - 1)
    }

  return (
    <div className='container'>
    Counter: {counter}
    <button onClick={() => handleSuma()} > + </button>
    <button onClick={() => handleResta()} > - </button>
    </div>
  )
}
