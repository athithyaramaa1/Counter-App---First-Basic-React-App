import { useState } from 'react'
import './App.css'

function App() {
    let [state, setState] = useState(0)
    const handleClickInc = () => {
        setState(state+1)
    }
    const handleClickDec = () => {
        setState(state-1)
    }

    const handleClickReset = () => {
        setState(0)
    }
    return(
        <>
        <p>{state}</p>
        <button onClick={handleClickInc}>+</button>
        <button onClick={handleClickDec}>-</button>
        <button onClick={handleClickReset}>Reset</button>
        </>
    )
}

export default App;