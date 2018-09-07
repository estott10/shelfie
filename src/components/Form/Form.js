import React, { Component } from 'react';
// import axios from 'axios';

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            image:'',
            productName: '',
            price: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.cancel = this.cancel.bind(this);
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


    render(){
        return(
            <div className= "form">
             <h1>{this.state.image}</h1>
                <h4>Image Url:</h4>
                <input name="image" value={this.state.image} onChange={this.handleChange}/>
                <h4>Name:</h4>
                <input name="productName" value={this.state.productName} onChange={this.handleChange}/>
                <h4>Price:</h4>
                <input name="price" value={this.state.price} onChange={this.handleChange}/>
                    <div className="form_buttons">
                <button className="add_button" onClick={this.add}>Add to Inventory</button>
                <button className= "cancel_button" onClick= {this.cancel}>Cancel</button>
                    </div>
            </div>
        )
    }
}

  



