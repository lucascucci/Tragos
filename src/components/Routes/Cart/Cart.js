import { useCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import '../../../css/cart.css';
import CarrMap from "../../CarrMap/CarrMap";


const Cart = () => {
const {
        sacarProductos,
        eliminarIndividual,
        vaciarCarrito,
        precioTotal,
        cart,
    } = useCartContext();



    return (
        <>
            {
                cart.length === 0 ?
                //div de carrito vacio
                <div className="carriVacio">
                    <span>El carrito esta vacio</span>
                    <br></br>
                    <Link to={`/`}><button className="">Volver al inicio</button></Link>
                </div>
                :
                <CarrMap precioTotal={precioTotal} vaciarCarrito={vaciarCarrito} eliminarIndividual={eliminarIndividual} sacarProductos={sacarProductos} cart={cart}/>
            }
        </>
    )
}


export default Cart;