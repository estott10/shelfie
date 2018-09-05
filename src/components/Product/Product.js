import React from 'react';


const Product = function(props) {



return (

    <div>
    
    {props.productimage}
   {props.productname}
   {props.productprice}
    </div>

)

};

export default Product;