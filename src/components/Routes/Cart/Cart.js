import { useCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import './cart.css'


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
                <div>
                    {
                        cart.map ((data,indice)=>
                        <div  className="contenedorOri" key={indice}>
                            <div>
                                <h1 className="titulo"> Nombre: {data.titulo}</h1>
                                <img className='imagen' src={data.imagen} alt="trago"/>
                                <br></br>
                                <span className="value">Valor $ :{data.precio}</span>
                                <br></br>
                                <h1>Cantidad: {data.cantidad}</h1>
                                <div >
                                    <button className="" disable={data.cantidad <= 0 && sacarProductos(data.id)} onClick={()=> eliminarIndividual (data.id)}>Eliminar Individual</button>
                                </div>
                            </div>
                        </div>    
                        )
                    }
                        <div className="vaciar">
                            <button className="vaciarCarro" onClick={vaciarCarrito}>Vaciar carrito</button>
                            <h2 className="precioTotal">Total:$ {precioTotal()}</h2>
                            <Link to={`/form`}><button className="continuar-compra">Continuar</button></Link>
                        </div>
                </div>
            }
        </>
    )
}


export default Cart;