import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
  render() {
    const { storedinventory } = this.props;
    return (


          <div >
           Dashboard
                {storedinventory.map((product, i)=> {
                    return <li key={i}> <Product productimage={product.image} productname={product.name} productprice={product.price}/> </li>
                  }) }
          </div>

    )
  }
}