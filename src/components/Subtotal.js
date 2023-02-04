import React from 'react'
import "./css/Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../reducer";
import {useNavigate} from "react-router-dom";

function Subtotal() {
    const Navigate = useNavigate();
    const [{basket, user}, dispatch] = useStateValue();
    const total = getBasketTotal(basket);
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>  
                        <small className='subtotal_left'>
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)*2}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
           
        </div>
      )
}

export default Subtotal
