import Card from '../Card/Card';
import '../../css/item.css';
import { Link } from 'react-router-dom';



const Item = ({data}) => {
    return(
    <>
        <div className='contenedor-carta'>
            <Card data={data}/>
            <Link to={`/item/${data.id}`}><button>Ver más</button></Link>
            <Link to={`/`}><button>Ir al Inicio</button></Link>
        </div>
    </>
    )
}

export default Item;