import "./productsList.css";
import Product from "./Product/Product";

function ProductsList({products, filteredProducts, addCartProduct}){

    return (
        <ul className="mainProductsList">
            { filteredProducts.length > 0 ?

                filteredProducts.map((product) => <Product key={product.id} addCartProduct={addCartProduct} product={product}/>)
                :
                products.map((product) => <Product key={product.id} addCartProduct={addCartProduct} product={product}/>)
            }
        </ul>
    )

}

export default ProductsList;