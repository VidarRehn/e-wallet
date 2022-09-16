import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header'
import Card from '../../components/Card'

import { getUser } from "../../redux/userSlice"

const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, status } = useSelector(state => state.user)

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
        </>
    )
}

export default Home