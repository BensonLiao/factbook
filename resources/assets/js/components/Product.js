import React, { Component } from 'react';
 
/* Stateless component or pure component
 * { product } syntax is the object destructing
 * { handleDelete } is a function pass from the class that use this object ,
 * like '<Product product={this.state.currentProduct} handleDelete={this.handleDelete}/>'
 */
const Product = ({product, handleDelete}) => {

    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
        margin: '30px 10px 10px 30px'
    }
  
    const inputStyle = {
        margin: '0px 10px 0px 10px'
    }

    //if the props product is null, return Product doesn't exist
    if (!product) {
        return (<div style={divStyle}> Product Doesnt exist </div>);
    }
        
    //Else, display the product data
    return (  
        <div style={divStyle}> 
            <h2> {product.title} </h2>
            <p> {product.description} </p>
            <h3> Status {product.available ? 'Available' : 'Out of stock'} </h3>
            <h3> Price : {product.price} </h3>
            <form onSubmit={handleDelete}>
                <input style={inputStyle} type="submit" value="Delete" />
            </form>
        </div>
    );
}
 
export default Product;