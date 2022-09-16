import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header'
import Card from '../../components/Card'

import { getUser } from "../../redux/userSlice"
import { addCard } from "../../redux/cardsSlice"

const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, status } = useSelector(state => state.user)
    const { cards } = useSelector(state => state.cards)

    useEffect(() => {
        if (!user) {
            dispatch(getUser())
        }
    }, [])

    return (
        <>
            <Header text={'E-WALLET'} />
            {user ? <Card user={user} /> : 'Loading...'}
            <button onClick={() => navigate('/addcard')}>Add new card</button>
            {console.log(cards)}
        </>
    )
}

export default Home