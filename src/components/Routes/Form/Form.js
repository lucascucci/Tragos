import '../../../css/form.css';
import { useCartContext } from '../../../context/CartContext';
import {getFirestore, addDoc , collection} from 'firebase/firestore';
import { useState } from 'react';




const Form = () => {

    const [id, setId] = useState()
    const [form , setForm]= useState({
        name:'',
        email:'',
        message:'',
    });

    const {cart,precioTotal,vaciarCarrito}= useCartContext();

    const enviarDatos = (e) => {
        e.preventDefault()
            if(form.name ===''&& form.email === ''){
                alert("Completar datos requeridos")
            }else{
            const db = getFirestore();
            const userCollection = collection(db,'compra')
                addDoc(userCollection,order).then((res)=>{
                    alert('La compra se envio correctamente')
                    setId(res.id)
                    vaciarCarrito();
                })
            }
    }

    const getValue = (ev) => {
        const {value, name} = ev.target;
        setForm({...form, [name]:value})
    }

    const order = {
        form,
        items: cart.map(data=>({id:data.id,titulo:data.titulo,precio:data.precio,cantidad:data.cantidad})),
        total: precioTotal()
    }


    return(
    <form onSubmit={enviarDatos} className="formulario">
        <div>
            <h4 className="form-title">Formulario para la compra</h4>
            <br></br>
            <label htmlFor='name'>Nombre:</label><br></br>
            <input
            name='name'
            id='name'
            value={form.name}
            onChange={getValue}
            className='input-group'>
            </input>
        </div>
        <div>
            <label htmlFor='email'>Email:</label><br></br>
            <input
                name='email'
                id='email'
                value={form.email}
                onChange={getValue}
                className='input-group'>
            </input>
        </div>
        <div>
            <label htmlFor='message'>Mensaje</label><br></br>
            <textarea
            name='message'
            id='message'
            value={form.message}
            onChange={getValue}
            className='text-area'>
            </textarea>
        </div>
        <button type='submit'>Enviar Formulario</button>
    </form>
    )
}

export default Form;