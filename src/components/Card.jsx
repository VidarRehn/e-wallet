
const Card = ( {cardInfo} ) => {
    
    let { fullName, cardNumber, valid, type } = cardInfo

    return (
        <div className={cardInfo.active ? 'card active' : 'card'}>
            <p>{fullName}</p>
            <p>{cardNumber}</p>
            <p>{valid}</p>
            <p>{type}</p>
            <div className="hidden-buttons">
                <button>make active</button>
                <button>remove card</button>
            </div>
        </div>
    )
}

export default Card