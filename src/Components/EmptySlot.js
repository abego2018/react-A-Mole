import { useEffect } from 'react'


function EmptySlot(props){

    useEffect(() => {
        let moleDelay = Math.ceil(Math.random() * 5000)
        let timer = setTimeout( () => {
            props.toggle(true)
        }, moleDelay)

        return () => clearTimeout(timer)
    })
    return(
        <div className="mole">
            <img src='../molehill.png' alt='molehill img'/>
        </div>
    )
}

export default EmptySlot