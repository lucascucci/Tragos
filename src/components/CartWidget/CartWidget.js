import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import '../../css/cartWidget.css';
import Carro from "../../assets/cart.png";

const CartWidget = () => {
    const {cantidadIndivual} = useCartContext();


    return (
        <Link to= {`/cart`}>
        <span>{parseInt(cantidadIndivual())}</span>
        <img className="carri" src={Carro} alt={Carro}/>
        </Link>
    )
}

export default CartWidget;