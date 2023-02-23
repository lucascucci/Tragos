import '../../css/card.css';

const Card = ({data})=> {

    return (
        <div className='itemContainer'>
            <h1>Nombre: {data.titulo}</h1>
            <h2>Precio:$ {data.precio}</h2>
            <img className="img" src={data.imagen} alt="trago"/>
        </div>
    )
}

export default Card;