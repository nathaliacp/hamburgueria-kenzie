import './App.css';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ProductsList from './components/ProductsList/ProductsList';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';


function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((res) => res.json())
    .then((res) => setProducts(res))
  }, [])

  function showProducts(inputValue){
    const filterProducts = products.filter((product) => {
       return product.name.toLowerCase().includes(inputValue.toLowerCase())
    });

     setFilteredProducts(filterProducts);
  };

    const handleAddCartSuccess = () => {
      toast.success("Produto adicionado!", {
        theme: "colored"
      });
    };

    const handleAddCartError = () => {
      toast.error("Este produto já foi adicionado!", {
        theme: "colored"
      });
    };

    const handleRemoveCartSucess = () => {
      toast.success("Produto removido!", {
        theme: "colored"
      });
    };

    const handleRemoveAllCartSucess = () => {
      toast.success("Produtos removidos!", {
        theme: "colored"
      });
    };

  function addCartProduct(productId){
      const findCartProduct = products.find((product) => {
        return product.id === productId ;
      });

      const someCartProduct = cartProducts.some((product) => {
        return product.id === findCartProduct.id;
      });

      if(someCartProduct) {
        handleAddCartError();
      } else {
        setCartProducts([...cartProducts, findCartProduct]);
        handleAddCartSuccess();
      };
  };

  function removeCartProduct(cartProduct){
    const filterRemoveCartProduct = cartProducts.filter((product) => {
      return product.id !== cartProduct.id;
    });

    setCartProducts(filterRemoveCartProduct);
    handleRemoveCartSucess();
  };

  const removeAll = () => {
    setCartProducts([]);
    handleRemoveAllCartSucess();
  };

  return (
    <div className="App">
      <div className="App-header">
        <Header showProducts={showProducts} setFilteredProducts={setFilteredProducts}/>

        <div className='content'>
          <ProductsList products={products} filteredProducts={filteredProducts} addCartProduct={addCartProduct}/>
          <Cart cartProducts={cartProducts} removeAll={removeAll} removeCartProduct={removeCartProduct}/>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
}

export default App;
