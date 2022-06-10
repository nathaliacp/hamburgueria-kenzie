import "./product.css";

function Product({product, addCartProduct}){

    return (
        <li className="mainProductCard">
            <div className="productIMG">
                <img src={product.img} alt={product.name} />
            </div>

            <div className="productInfos">
                <h2>{product.name}</h2>
                <p>{product.category}</p>
                <span>R$ {product.price.toFixed(2)}</span>

                <button className="addCartBtn" onClick={() => addCartProduct(product.id)}>Adicionar</button>
            </div>
        </li>
    )
}

export default Product;