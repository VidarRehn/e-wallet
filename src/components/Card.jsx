
const Card = ( {cardInfo} ) => {
    
    let { fullName, cardNumber, valid, type } = cardInfo

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
            <div className="hidden-buttons">
                <button>make active</button>
                <button>remove card</button>
            </div>
        </div>
    )
}

export default Card