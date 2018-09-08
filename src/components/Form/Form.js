import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            image:'',
            productName: '',
            price: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.cancel = this.cancel.bind(this)
        this.addInventory = this.addInventory.bind(this)

    }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    cancel(){
      this.setState({
        image: '',
        productName: '',
        price: ''
      })
    }

    addInventory(){
        const newProduct = {
            product_name: this.state.productName,
            price: this.state.price,
            image: this.state.image
        }
        
        axios.post('/api/product', newProduct)
            .then(result => {
               this.props.getInventory()
            })
    }

    render(){
        return(
            <div className= "form">
             <h1 className="form_image"></h1>
                <h4 className="form_labels">Image Url:</h4>
                <input name="image" value={this.state.image} onChange={this.handleChange}/>
                <h4 className="form_labels">Name:</h4>
                <input name="productName" value={this.state.productName} onChange={this.handleChange}/>
                <h4 className="form_labels">Price:</h4>
                <input name="price" value={this.state.price} onChange={this.handleChange}/>
                    <div className="form_buttons">
                <button className= "cancel_button" onClick= {this.cancel}>Cancel</button>
                <button className="add_button" onClick={() => {this.addInventory(); this.cancel();}}>Add to Inventory</button>
                    </div>
            </div>
        )
    }
}

  



