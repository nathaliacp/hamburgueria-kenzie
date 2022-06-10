import "./cart.css";
import CartProduct from "./CartProduct/CartProduct";


function Cart({cartProducts, removeAll, removeCartProduct}){
    
    const reduce = cartProducts.reduce((acc, current) => {
        return acc + current.price;
    }, 0);

    return (

        <aside className="asideCart">
            <section className="cartTitle">
                <h3>Carrinho de compras</h3>
            </section>

            <section className="cartProducts">
                {
                    cartProducts.length === 0 ?
                    <div className="cartEmpty">
                        <h4>Sua sacola está vazia</h4>
                        <p>Adicione itens</p>
                    </div>
                    :
                    <>
                        <ul className="cartList">
                            {cartProducts.map((cartProduct) => <CartProduct key={cartProduct.id} cartProduct={cartProduct} removeCartProduct={removeCartProduct}/>)}
                        </ul>

                        <div className="borderLine"></div>

                        <div className="cartInfos">
                            <p>Total <span>{`R$ ${reduce.toFixed(2)}`}</span></p>
                            <button onClick={() => removeAll()}>Remover todos</button>
                        </div>
                    </>
                }
            </section>
        </aside>
        
    )
}

export default Cart;