import '../../css/navbar.css';
import { Link } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return (
        <>
            <nav>
                <ul className='barra'>
                <CartWidget/>
                    <Link to={'/item'}><li>Tragos</li></Link>          
                    <Link to={'/Envios'}><li>Envios</li></Link>
                    <Link to={'/contacto'}><li>Contactanos</li></Link>
                </ul>
            </nav> 
        </>
    )
}

export default Navbar;

