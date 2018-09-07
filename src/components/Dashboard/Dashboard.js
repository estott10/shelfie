import React, { Component } from 'react';
import Product from '../Product/Product';
import '../../App.css';

export default class Dashboard extends Component {
    constructor(props){
    super(props)

    this.state = {
        product: {}

        }
    }



  render() {
    console.log(this.props)
    const { storedinventory } = this.props;
    return (
          <div className="Dashboard">
           Dashboard
                {storedinventory.map((product, i)=> {
                    return <li className="productgrid" key={i}> <Product productimage={product.image} productname={product.product_name} productprice={product.price}/> </li>
                  }) }
          </div>

    )
  }
}