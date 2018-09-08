import React from 'react';
import '../../App.css'


const Product = function(props) {



return (

    <div className="product">
    <img className= "productimg" src={props.productimage} alt="product" />
        <div className= "productinfo">
            <h3 id="productname">{props.productname}</h3>
            <h3 id="productprice">${props.productprice}</h3>
        </div>
        <div>
        <button className="delete_button" >Delete</button>
        <button>Edit</button>
        </div>
    </div>

)

};

export default Product;