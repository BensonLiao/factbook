import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

/* An example React component */
class Main extends Component {
    constructor() {
        super();
        //Initialize the state in the constructor
        /* currentProduct keeps track of the product currently
        * displayed */
        this.state = {
            products: [],
            currentProduct: null
        }
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
      /*componentDidMount() is a lifecycle method
       * that gets called after the component is rendered
       */
    componentDidMount() {
        /* fetch API in action */
        fetch('/api/products')
        .then(response => {
            return response.json();
        })
        .then(products => {
            //Fetched product is stored in the state
            this.setState({ products });
        });
    }

    handleClick(product) {
        //handleClick is used to set the state
        this.setState({currentProduct:product});
    }
    
    handleAddProduct(product) {
        product.price = Number(product.price);
        /*Fetch API for post request */
        fetch( 'api/products', {
            method:'post',
            /* headers are important*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                
            body: JSON.stringify(product)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            //update the state of products and currentProduct
            this.setState((prevState)=> ({
                products: prevState.products.concat(data),
                currentProduct : data
            }))
        });
    }
    
    handleDelete() {
        const currentProduct = this.state.currentProduct;
        console.log('currentProduct id='+currentProduct.id);
        fetch( 'api/products/' + currentProduct.id, {
            method: 'delete' 
        })
        .then(response => {
            /* Duplicate the array and filter out the item to be deleted */
            let array = this.state.products.filter(function(item) {
                return item !== currentProduct
            });
        
            this.setState({ products: array, currentProduct: null});
        });
    }

    handleUpdate(product) {
        const currentProduct = this.state.currentProduct;
        fetch( 'api/products/' + currentProduct.id, {
            method:'put',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            /* Updating the state */
            var array = this.state.products.filter(function(item) {
                return item !== currentProduct
            })
            this.setState((prevState)=> ({
                products: array.concat(product),
                currentProduct : product
            }))
        }) 
    }
    
    renderProducts() {
        const listStyle = {
            listStyle: 'none',
            fontSize: '18px',
            lineHeight: '1.8em',
        }
        return this.state.products.map((product, index) => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                //this.handleClick() method is invoked onClick.
                // <li style={listStyle} onClick={
                //     () =>this.handleClick(product)} key={product.id} >
                //     { product.title } 
                // </li>      
                <li style={listStyle} onClick={
                    () =>this.handleClick(product)} key={index} >
                    { product.title } 
                </li>    
            );
        })
    }
       
    render() {
        /* Some css code has been removed for brevity */
        const mainDivStyle =  {
            display: "flex",
            flexDirection: "row"
        }
        
        const divStyle = {
            justifyContent: "flex-start",
            padding: '10px',
            width: '35%',
            background: '#f0f0f0',
            padding: '20px 20px 20px 20px',
            margin: '30px 10px 10px 30px'
            
        }
        // const [Product] = this.props.children;
        return (
            /* The extra divs are for the css styles */
            <div style={mainDivStyle}>
                <div style={divStyle}>
                    <h3> All products list</h3>
                    <ul>
                        { this.renderProducts() }
                    </ul> 
                </div> 
                <Product product={this.state.currentProduct} handleDelete={this.handleDelete}/>
                <UpdateProduct product={this.state.currentProduct} onUpdate={this.handleUpdate} /> 
                <AddProduct onAdd={this.handleAddProduct} /> 
            </div>
        );
    }
}
 
export default Main;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}