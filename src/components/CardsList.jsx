import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from './Card'

import { addCard } from "../redux/cardsSlice"

const CardsList = ( {user} ) => {

    let { name } = user.results[0]

    const dispatch = useDispatch()
    const { cards } = useSelector(state => state.cards)
    
    useEffect(() => {
        if (cards.length < 1) {
            let newCard = {
                fullName: (`${name.first} ${name.last}`).toUpperCase(), 
                type: ['Mastercard', 'Visa', 'American Express', 'Diners'][Math.floor(Math.random()*4)],
                cardNumber: '1234 1234 1234 1234',
                valid: '12/25',
                cvc: '123',
                active: true
            }
            dispatch(addCard(newCard))
        }
    }, [])
    

    return (
        <div className='cards-list'>
            {cards && cards.map((card, i) => <Card key={i} cardInfo={card} />)}
        </div>
    )
}

export default CardsList