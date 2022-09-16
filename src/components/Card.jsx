import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addCard } from "../redux/cardsSlice"

const Card = ( {user} ) => {

    let { name } = user.results[0]

    const dispatch = useDispatch()
    const { cards } = useSelector(state => state.cards)
    
    useEffect(() => {
        if (cards.length < 1) {
            let newCard = {
                fullName: (`${name.first} ${name.last}`).toUpperCase(), 
                type: ['Mastercard', 'Visa', 'American Express', 'Diners'][Math.floor(Math.random()*4)],
                cardNumber: '1234 1234 1234 1234',
                active: true
            }
            dispatch(addCard(newCard))
        }
    }, [])
    

    return (
        <div>
            <p>{name.first} {name.last}</p>
            {console.log(cards)}
        </div>
    )
}

export default Card