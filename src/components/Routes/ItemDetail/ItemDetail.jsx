import './itemDetail.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data}) => {

const {agregarProducto} = useCartContext();


const onAdd = (contador)=> {
    agregarProducto(data,contador)
}



    return(
        <div className='detailContainer'>
            <div>
                <span>Nombre: {data.titulo}</span>
                <h2>Precio:$ {data.precio}</h2>
                <img className='img1' src={data.imagen} alt="trago"/>
            </div>
            <div>
                <ItemCount data={data} onAdd= {onAdd}/>
            </div>
            <div className='detailContainer'>
                <Link to={`/item`}><button className='volverATragos'> Volver a la lista de tragos </button></Link>
                <Link to={`/Cart`}><button className='aCarrito'> ir a Carrito </button></Link>
            </div>
        </div>

    )
}

export default ItemDetail;