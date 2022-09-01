import React from 'react'
import Wrapper from './Wrapper'

const User = () => {

    return (
        <div>
            <h2>ProductList</h2>
        </div>
    );
}

const ProductList = Wrapper(User,"Products")

export default ProductList