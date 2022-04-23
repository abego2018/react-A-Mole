import Mole from './Mole'
import { useState } from 'react'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }


let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />
    return(
        <div id="molemole">
            {displayMole}
        </div>
    )
}

export default MoleContainer