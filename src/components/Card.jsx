import { useSelector, useDispatch } from 'react-redux'
import { removeActive, makeActive, removeCard } from "../redux/cardsSlice"

const Card = ( {cardInfo} ) => {

    const dispatch = useDispatch()
    
    let { fullName, cardNumber, valid, type } = cardInfo

    const makeActiveOnClick = () => {
        dispatch(makeActive(cardInfo))
    }

    const removeCardOnClick = () => {
        dispatch(removeCard(cardInfo))
    }

    return (
        <div className={cardInfo.active ? `active card ${type}` : `card ${type}`}>
            <div className="card-images">
                <div className="chip"></div>
                <div className="logo"></div>
            </div>
            <div className="card-number">
                <p>{cardNumber}</p>
            </div>
            <div className="card-info">
                <div>
                    <p className="label">CARD HOLDER</p>
                    <p>{fullName}</p>
                </div>
                <div>
                    <p className="label">VALID THRU</p>
                    <p>{valid}</p>
                </div>
            </div>
            {!cardInfo.active && 
                <div className="hidden-buttons">
                    <button onClick={() => makeActiveOnClick()}>Activate</button>
                    <button onClick={() => removeCardOnClick()}><i className="fa-solid fa-trash-can"></i></button>
                </div>}
        </div>
    )
}

export default Card