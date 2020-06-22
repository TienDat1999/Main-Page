import React, { Component } from 'react'

//tao productContext 
const ProductContext = React.createContext();

class ProductProvider extends Component {

       render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
             }}>
                {this.props.children}
            </ProductContext.Provider>
            
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

 export {ProductProvider};
 export default ProductConsumer;