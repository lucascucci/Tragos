import React from "react";
import { useContext, useState } from "react";


const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);
// debemos crear el componente provider

const CartProvider = ({ children }) => {

    // iniciar el estado DE NUESTRO CARTCONTEXT
    const [cart, setCart] = useState([]);


    // Funciones 
    //Agregar producto

    const agregarProducto = (item, cantidad) => {
        if (estaEnCarrito(item.id)) {
            setCart(
                cart.map((data) => {
                    return data.id === item.id
                        ? { ...data, cantidad: data.cantidad + cantidad }
                        : data;
                })
            );
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };


    const cantidadIndivual = () => {
        return cart.reduce((acc, data) => (acc += data.cantidad), 0);
    };


    const eliminarIndividual = (id) =>
        setCart(
            cart.map((data) =>
                data.id === id ? { ...data, cantidad: data.cantidad - 1 } : data
            )
        );


    const estaEnCarrito = (id) =>
        cart.find((data) => data.id === id) ? true : false;

    const vaciarCarrito = () => setCart([]);

    const sacarProductos = (id) => setCart(cart.filter((data) => data.id !== id));

    const precioTotal = () => {
        return cart.reduce((acc, data) => (acc += data.cantidad * data.precio), 0);
    };


    return (
        //Enviamos el nombre del contexto
        // el value va a encerrar nuestro objeto de funciones y estados que queremos distribuir.
        <CartContext.Provider value={{

            agregarProducto,
            cantidadIndivual,
            eliminarIndividual,
            estaEnCarrito,
            vaciarCarrito,
            sacarProductos,
            precioTotal,
            cart,

        }}>

            {/*se va a enviar a todos los hijos que esten encerrados en el context*/}
            {children}

        </CartContext.Provider>

    )
}

export default CartProvider; 