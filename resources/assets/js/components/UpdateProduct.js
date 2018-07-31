import React, { Component } from 'react';

class UpdateProduct extends Component {

    constructor(props) {
        super(props);
        /* Initialize the state. */
        this.state = {
            currentProduct: {
                title: '',
                description: '',
                price: 0,
                available: 0
            }
        }
        
        //Boilerplate code for binding methods with `this`
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    
    /* This method dynamically accepts inputs and stores it in the state */
    handleInput(key, event) {
        /*Duplicating and updating the state */
        var state = Object.assign({}, this.state.currentProduct); 
        state[key] = event.target.value;
        this.setState({currentProduct: state});
    }
    
    /* This method is invoked when submit button is pressed */
    handleSubmit(event) {
        //preventDefault prevents page reload   
        event.preventDefault();
        /*A call back to the onUpdate props. The control is handed over
        *to the parent component. The current state is passed 
        *as a param
        */
        this.props.onUpdate(this.state.currentProduct);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps.');
        // console.log(nextProps.product);
        this.setState({currentProduct:nextProps.product});
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('componentDidUpdate.');
    //     console.log(prevState);
    // }

    render() {

        const divStyle = {
            position: 'absolute',
            left: '35%',
            top: '70%',
            flexDirection: 'space-between',
            marginLeft: '30px'
        }
        
        const inputStyle = {
            margin: '0px 10px 0px 10px'
        }

        const productUpdateForm = (
            <div> 
                <div style={divStyle}> 
                    <h2> Update this product </h2>
                    {/*when Submit button is pressed, the control is passed to 
                    *handleSubmit method 
                    */}
                    <form onSubmit={this.handleSubmit}>

                        <label> 
                            Title: 
                            {/*On every keystroke, the handeInput method is invoked */}
                            <input defaultValue='title' value={this.state.currentProduct.title} style={inputStyle} type="text" onChange={(e)=>this.handleInput('title', e)} />
                        </label>
                        
                        <label> 
                            Description: 
                            <input defaultValue='description' value={this.state.currentProduct.description} style={inputStyle}  type="text" onChange={(e)=>this.handleInput('description', e)} />
                        </label>
                        
                        <label>
                            Price:
                            <input defaultValue='price' value={this.state.currentProduct.price} style={inputStyle}  type="number" onChange={(e)=>this.handleInput('price', e)}/>
                        </label>

                        <input style={inputStyle}  type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        );
        
        // if (this.state.currentProduct) {
        //     console.log('currentProduct is selected.');
        //     console.log(this.state.currentProduct);

        //     const productUpdateForm = (
        //         <div> 
        //             <div style={divStyle}> 
        //                 <h2> Update this product </h2>
        //                 {/*when Submit button is pressed, the control is passed to 
        //                 *handleSubmit method 
        //                 */}
        //                 <form onSubmit={this.handleSubmit}>
    
        //                     <label> 
        //                         Title: 
        //                         {/*On every keystroke, the handeInput method is invoked */}
        //                         <input value={this.state.currentProduct.title} style={inputStyle} type="text" onChange={(e)=>this.handleInput('title', e)} />
        //                     </label>
                            
        //                     <label> 
        //                         Description: 
        //                         <input value={this.state.currentProduct.description} style={inputStyle}  type="text" onChange={(e)=>this.handleInput('description', e)} />
        //                     </label>
                            
        //                     <label>
        //                         Price:
        //                         <input value={this.state.currentProduct.price} style={inputStyle}  type="number" onChange={(e)=>this.handleInput('price', e)}/>
        //                     </label>
    
        //                     <input style={inputStyle}  type="submit" value="Submit" />
    
        //                 </form>
        //             </div>
        //         </div>
        //     );

        //     return productUpdateForm;
        // }

        return productUpdateForm;
    }
}

export default UpdateProduct;