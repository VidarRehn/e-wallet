import { useLocation, useNavigate } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import Header from "../../components/Header"
import { addCard, removeActive, sortCards } from "../../redux/cardsSlice"

const AddCard = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const { cards } = useSelector(state => state.cards)

    let fullName = (`${location.state.results[0].name.first} ${location.state.results[0].name.last}`).toUpperCase()

    const addCardOnSubmit = (e) => {
        e.preventDefault()
        dispatch(removeActive())
        const type = document.querySelector('#type').value
        const cardNumber= document.querySelector('#card-number').value
        let styledCardNumber = cardNumber.split('').map((number, index) => {
            if (index === 3 || index === 7 || index === 11) {
                return number + ' '
            } else {
                return number
            }
        }).join('')
        const cardHolder = document.querySelector('#cardholder-name').value
        const valid = document.querySelector('#valid').value
        const cvc = document.querySelector('#cvc').value
        const newCard = {
            fullName: cardHolder,
            type: type,
            cardNumber: styledCardNumber,
            valid: valid,
            cvc: cvc,
            active: true
        }

        dispatch(addCard(newCard))
        dispatch(sortCards())
        navigate('/')
    }

    return (
        <>
            <Header text={'ADD NEW CARD'} />
            <form className="add-new-card-form" onSubmit={(e) => addCardOnSubmit(e)}>
                <div className="input">
                    <label htmlFor="type">VENDOR</label>
                    <select name="type" id="type">
                        <option value="Mastercard">Mastercard</option>
                        <option value="Visa">Visa</option>
                        <option value="American Express">American Express</option>
                        <option value="Diners">Diners</option>
                    </select>
                </div>
                <div className="input">
                    <label htmlFor="card-number">CARD NUMBER</label>
                    <input type="text" name="card-number" id="card-number" placeholder="XXXX-XXXX-XXXX-XXXX" pattern="[0-9]{16}" required />
                </div>
                <div className="input">
                    <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
                    <input type="text" name="cardholder-name" id="cardholder-name" value={fullName} readOnly />
                </div>
                <div className="small-input">
                    <div className="input">
                        <label htmlFor="valid">VALID THRU</label>
                        <input type="text" name="valid" id="valid" placeholder="XX/XX" pattern="[0-9]{4}" required />
                    </div>
                    <div className="input">
                        <label htmlFor="cvc">CVC</label>
                        <input type="text" name="cvc" id="cvc" placeholder="XXX" pattern="[0-9]{3}" required />
                    </div>
                </div>
                <button>ADD CARD</button>
                <button onClick={() => navigate('/')}>See all cards</button>
            </form>
        </>
    )
}

export default AddCard