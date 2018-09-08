import React, { Component } from 'react';
import Product from '../Product/Product';
import '../../App.css';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props){
    super(props);

    this.state = {
        random: ""

        }
      this.deleteProduct = this.deleteProduct.bind(this)
    }
    
    deleteProduct(id){
      axios.delete(`/api/removeproduct/${id}`)
        .then(result => {
          this.props.getInventory()
        })
    }


  render() {
    console.log(this.props)
    const { storedinventory } = this.props;
    return (
          <div className="Dashboard">
                {storedinventory.map((product, i)=> {
                    return <ul className="productgrid" key={i}> <Product productid={product.product_id} productimage={product.image} productname={product.product_name} productprice={product.price} removeProduct={this.deleteProduct}/> 
                    </ul>
                  }) }
          </div>

    )
  }
}