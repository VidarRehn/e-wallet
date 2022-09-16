
const Card = ( {cardInfo} ) => {
    
    let { fullName, cardNumber, valid, type } = cardInfo

    return (
        <div className={cardInfo.active ? 'card active' : 'card'}>
            <p>{fullName}</p>
            <p>{cardNumber}</p>
            <p>{valid}</p>
            <p>{type}</p>
        </div>
    )
}

export default Card