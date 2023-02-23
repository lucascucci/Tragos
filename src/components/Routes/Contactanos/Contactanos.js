import '../../../css/contactanos.css';
import { Link } from 'react-router-dom';


const Contactanos = () => {

    return (
        <div className='contacto'>
            <h1>Informacion de contacto.</h1>
            <h2>Dejanos un mensaje y nos pondremos en contacto.</h2>
            <br></br>
            <br></br>
            <Link to={`/form`}><button>Mensaje</button></Link>
        </div>
    )
}

export default Contactanos;
