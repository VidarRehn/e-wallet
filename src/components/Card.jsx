
const Card = ( {user} ) => {

    let { name } = user.results[0]

    return (
        <div>
            <p>{name.first} {name.last}</p>
        </div>
    )
}

export default Card