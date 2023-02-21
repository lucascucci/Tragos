
import './item.css'
import { Link } from 'react-router-dom';



const Item = ({data}) => {
    return(
        <div className='itemContainer'>
            <h1>Nombre: {data.titulo}</h1>
            <h2>Precio:$ {data.precio}</h2>
            <img className="img" src={data.imagen} alt="trago"/>
            <Link to={`/item/${data.id}`}><button>Ver más</button></Link>
            <Link to={`/`}><button>Ir al Inicio</button></Link>
        </div>
    )
}

export default Item;