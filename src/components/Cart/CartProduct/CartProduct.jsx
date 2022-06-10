import "./cartProduct.css";

function CartProduct({cartProduct, removeCartProduct}) {

    return (
        <li className="productCart">
            <div className="productCardIMG">
                <img src={cartProduct.img} alt={cartProduct.name} />
            </div>
            
            <div className="productCardInfos">
                <p>{cartProduct.name}</p>
                <span>{cartProduct.category}</span>
            </div>

            <button className="removeCartProductBtn" onClick={() => removeCartProduct(cartProduct)}>Remover</button>
        </li>
    )
}

export default CartProduct;