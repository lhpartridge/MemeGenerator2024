// import Header from './componenents/Header'
// import Meme from './componenents/Meme'
import React, {useState} from 'react'


const App =()=> {

    // const [count, setCount] = useState(0)

    // const [result, setResult] = useState("yes" )

    // function handleClick() {
    //     setImportant("Not at all")
    // }

    // const thingsArray = [
    //     "Thing 1",
    //     "Thing 2"
    // ]

    // console.log(thingsArray)

    // let newArray = thingsArray.map(item => {
    //     return <p>{item}</p>
    // })

    // const addThing =()=> {
    //     thingsArray.push(`Thing ${thingsArray.length + 1}`)
    //     console.log(thingsArray)
    // }

    const add =()=> {
        // setCount(count + 1)
        setCount(prevCount => prevCount + 1)
    }

    const subtract =()=> {
        setCount(prevCount => prevCount -1)
        // setCount(count - 1)
    }

    return(
        <>
            <div className="counter">
                <button className="minus" onClick={subtract}>-</button>
                <div className="counter">
                        <h1>{count}</h1>
                </div>
                <button className="plus" onClick={add}>+</button>
            </div>

            {/* <div className="state-value"
                onClick={handleClick}>
                <h1>Result is: {result}</h1>
            </div> */}
            {/* <button
                onClick={ addThing }>add item</button> */}
            {/* {newArray} */}
            {/* <Header /> */}
            {/* <Meme /> */}
        </>
    )
}

export default App