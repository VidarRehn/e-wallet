import { useLocation, useNavigate } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import Header from "../../components/Header"
import { addCard } from "../../redux/cardsSlice"

const AddCard = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const { cards } = useSelector(state => state.cards)

    let fullName = (`${location.state.results[0].name.first} ${location.state.results[0].name.last}`).toUpperCase()

    return (
        <>
            <Header text={'ADD NEW CARD'} />
            <button onClick={() => navigate('/')}>See all cards</button>
            <form>
                <div>
                    <label htmlFor="vendor">VENDOR</label>
                    <select name="vendor" id="vendor">
                        <option selected disabled>Choose</option>
                        <option value="Mastercard">Mastercard</option>
                        <option value="Visa">Visa</option>
                        <option value="American Express">American Express</option>
                        <option value="Diners">Diners</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="card-number">CARD NUMBER</label>
                    <input type="text" name="card-number" id="card-number" />
                </div>
                <div>
                    <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
                    <input type="text" name="cardholder-name" id="cardholder-name" value={fullName} readOnly />
                </div>
                <div>
                    <div>
                        <label htmlFor="valid">VALID THRU</label>
                        <input type="text" name="valid" id="valid" />
                    </div>
                    <div>
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" name="cvc" id="cvc" />
                    </div>
                </div>
                <button>ADD CARD</button>
            </form>
        </>
    )
}

export default AddCard