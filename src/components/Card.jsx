import { useSelector, useDispatch } from 'react-redux'
import { removeActive, makeActive } from "../redux/cardsSlice"

const Card = ( {cardInfo} ) => {

    const dispatch = useDispatch()
    
    let { fullName, cardNumber, valid, type } = cardInfo

    const makeActiveOnClick = (e) => {
        console.log(e.target.parentElement.parentElement)
        // dispatch(removeActive())
        dispatch(makeActive(cardInfo))
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
                <button onClick={(e) => makeActiveOnClick(e)}>make active</button>
                <button>remove card</button>
            </div>}
        </div>
    )
}

export default Card