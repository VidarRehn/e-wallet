import { useLocation, useNavigate } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import Header from "../../components/Header"
import { addCard, changeActive, sortCards } from "../../redux/cardsSlice"

const AddCard = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const { cards } = useSelector(state => state.cards)

    let fullName = (`${location.state.results[0].name.first} ${location.state.results[0].name.last}`).toUpperCase()

    const addCardOnSubmit = (e) => {
        e.preventDefault()
        dispatch(changeActive())
        const type = document.querySelector('#type')
        const cardNumber= document.querySelector('#card-number')
        const cardHolder = document.querySelector('#cardholder-name')
        const valid = document.querySelector('#valid')
        const cvc = document.querySelector('#cvc')
        const newCard = {
            fullName: cardHolder.value,
            type: type.value,
            cardNumber: cardNumber.value,
            valid: valid.value,
            cvc: cvc.value,
            active: true
        }
        dispatch(addCard(newCard))
        dispatch(sortCards())
        navigate('/')
    }

    return (
        <>
            <Header text={'ADD NEW CARD'} />
            <button onClick={() => navigate('/')}>See all cards</button>
            <form onSubmit={(e) => addCardOnSubmit(e)}>
                <div>
                    <label htmlFor="type">VENDOR</label>
                    <select name="type" id="type" defaultValue={'default'} required>
                        <option value={'default'} disabled>Choose</option>
                        <option value="Mastercard">Mastercard</option>
                        <option value="Visa">Visa</option>
                        <option value="American Express">American Express</option>
                        <option value="Diners">Diners</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="card-number">CARD NUMBER</label>
                    <input type="text" name="card-number" id="card-number" required />
                </div>
                <div>
                    <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
                    <input type="text" name="cardholder-name" id="cardholder-name" value={fullName} readOnly />
                </div>
                <div>
                    <div>
                        <label htmlFor="valid">VALID THRU</label>
                        <input type="text" name="valid" id="valid" required />
                    </div>
                    <div>
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" name="cvc" id="cvc" required />
                    </div>
                </div>
                <button>ADD CARD</button>
            </form>
        </>
    )
}

export default AddCard