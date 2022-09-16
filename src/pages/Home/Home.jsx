import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header'
import CardsList from '../../components/CardsList'

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
            {user ? <CardsList user={user} /> : 'Loading...'}
            <button className='add-new-card-btn'><Link to={'/addcard'} state={user}>Add new card</Link></button>
        </>
    )
}

export default Home