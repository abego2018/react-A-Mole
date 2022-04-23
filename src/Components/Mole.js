import { useEffect } from 'react'

function Mole (props){

    useEffect(() => {
        let moleDelay = Math.ceil(Math.random() * 10000)
        let timer = setTimeout( () => {
            props.toggle(false)
        }, moleDelay)

        return () => clearTimeout(timer)
    })

    return(
        <div className="mole">
            <img src='../mole.png' alt='mole img' onClick={props.handleClick}/>
        </div>
    )
}

export default Mole