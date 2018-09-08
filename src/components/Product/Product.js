import React from 'react';
import '../../App.css'


const Product = function(props) {



return (

    <div className="product">
    <img className= "productimg" src={props.productimage} alt="product" />
        <div className="rightOfProduct">
        <div className= "productinfo">
            <h3 id="productname">{props.productname}</h3>
            <h3 id="productprice">${props.productprice}</h3>
        </div>
        <div className="product_buttons">
        <button className="delete_button" onClick={() => {props.removeProduct(props.productid)}}>Delete</button>
        <button className="edit_button">Edit</button>
        </div>
        </div>
    </div>

)

};

export default Product;