import "./header.css";
import { useState } from "react";

function Header({showProducts, setFilteredProducts}){

    const [inputValue, setInputValue] = useState("");

    return(
        <header className="headerContent">
            <h1 className="headerTitle" onClick={() => setFilteredProducts([])}>Burguer <span>Kenzie</span></h1>

            <div className="headerSearch">
                <input 
                className="headerInput"
                placeholder="Digitar Pesquisa"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text" />
                <button className="headerBtn" onClick={() => { 
                    showProducts(inputValue);
                    setInputValue("");
                }}>Pesquisar</button>
            </div>
        </header>
    )
}

export default Header;