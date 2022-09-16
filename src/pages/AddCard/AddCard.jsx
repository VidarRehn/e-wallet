import { useNavigate } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import Header from "../../components/Header"
import { addCard } from "../../redux/cardsSlice"

const AddCard = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cards } = useSelector(state => state.cards)

    return (
        <>
            <Header text={'ADD NEW CARD'} />
            <button onClick={() => navigate('/')}>See all cards</button>
        </>
    )
}

export default AddCard