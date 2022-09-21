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
                cardNumber: '5226 6215 4885 6019',
                valid: '12/25',
                cvc: '123',
                active: true
            }
            dispatch(addCard(newCard))
        }
    }, [])
    

    return (
        <>
            <div className='active-card'>
                <h4>ACTIVE CARD</h4>
            {cards && cards.map((card, i) => card.active ? <Card key={i} cardInfo={card} /> : null)}
            </div>
            <div className='inactive-cards'>
            {cards && cards.map((card, i) => !card.active ? <Card key={i} cardInfo={card} /> : null)}
            </div>
        </>
    )
}

export default CardsList