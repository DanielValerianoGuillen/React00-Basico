
import '../style/carrito.css'
import Producto from "./Producto";



const Carrito = ({ carrito, agregarProducto }) => (
    <div className='carrito'>
        <h2>Tu carrito de compras</h2>

        {carrito.length === 0
            ?
            <h2>No hay elementos en el ecarrito</h2>
            : carrito.map(producto => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                />
            ))}
    </div>

)

export default Carrito;