import React from "react";
import {FaSearch} from "react-icons/fa"

function Temperature(){
    return(
        <div className="container">
            <h3>Confira o clima de uma cidade:</h3>
            <div className="form-input-container">
                <input type="text" placeholder="Digite o nome da cidade" id="city-input" />
                <button id="search">
                    <FaSearch/>
                </button>
            </div>
        </div>
        
    )
}

export default Temperature;