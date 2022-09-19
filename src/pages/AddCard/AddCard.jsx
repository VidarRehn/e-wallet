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
        const validMonth = document.querySelector('#valid-month').value
        const validYear = document.querySelector('#valid-year').value
        let styledValidity = `${validMonth}/${validYear}`
        const cvc = document.querySelector('#cvc').value
        const newCard = {
            fullName: cardHolder,
            type: type,
            cardNumber: styledCardNumber,
            valid: styledValidity,
            cvc: cvc,
            active: true
        }

        dispatch(addCard(newCard))
        dispatch(sortCards())
        navigate('/')
    }

    const validityPreview = document.querySelector('#card-validity-preview')

    const handleNumberChange = (e) => {
        const numberPreview = document.querySelector('#card-number-preview')
        numberPreview.innerText = e.target.value
    }

    const handleLogoChange = (e) => {
        const logoPreview = document.querySelector('#logo-preview')
        const card = logoPreview.parentElement.parentElement
        card.removeAttribute('class')
        card.classList.add(`${e.target.value}`)
        card.classList.add('card')
    }

    return (
        <>
            <Header text={'ADD NEW CARD'} />
            <div className="card no-vendor">
            <div className="card-images">
                <div className="chip"></div>
                <div className="logo" id="logo-preview"></div>
            </div>
            <div className="card-number">
                <p  id="card-number-preview">XXXX-XXXX-XXXX-XXXX</p>
            </div>
            <div className="card-info">
                <div>
                    <p className="label">CARD HOLDER</p>
                    <p id="card-name-preview">{fullName}</p>
                </div>
                <div>
                    <p className="label">VALID THRU</p>
                    <p  id="card-validity-preview">XX / XX</p>
                </div>
            </div>
        </div>
            <form className="add-new-card-form" onSubmit={(e) => addCardOnSubmit(e)}>
                <div className="input">
                    <label htmlFor="type">VENDOR</label>
                    <select onChange={(e) => handleLogoChange(e)} defaultValue='' name="type" id="type" required>
                        <option value="" disabled>Choose</option>
                        <option value="Mastercard">Mastercard</option>
                        <option value="Visa">Visa</option>
                        <option value="American">American Express</option>
                        <option value="Diners">Diners</option>
                    </select>
                </div>
                <div className="input">
                    <label htmlFor="card-number">CARD NUMBER</label>
                    <input onChange={(e) => handleNumberChange(e)} type="text" name="card-number" id="card-number" placeholder="XXXX-XXXX-XXXX-XXXX" pattern="[0-9]{16}" required />
                </div>
                <div className="input">
                    <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
                    <input type="text" name="cardholder-name" id="cardholder-name" value={fullName} readOnly />
                </div>
                <div className="small-input">
                    <div className="input">
                        <label htmlFor="validity">VALID THRU</label>
                        <div id="validity">
                            <select name="valid-month" id="valid-month">
                                {['01','02','03','04','05','06','07','08','09','11','12'].map((month, index) => <option key={index}>{month}</option>)}
                            </select>
                            <select name="valid-year" id="valid-year">
                                {['22','23','24','25','26','27'].map((year,index) => <option key={index}>{year}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="cvc">CVC</label>
                        <input type="text" name="cvc" id="cvc" placeholder="XXX" pattern="[0-9]{3}" required />
                    </div>
                </div>
                <div  className="buttons">
                    <button>ADD CARD</button>
                    <button onClick={() => navigate('/')}>See all cards</button>
                </div>
            </form>
        </>
    )
}

export default AddCard