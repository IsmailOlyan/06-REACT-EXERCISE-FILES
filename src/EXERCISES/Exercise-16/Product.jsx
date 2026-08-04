import React, { useContext } from 'react';
import CartContext from './CartContext';

function Product(
    { itemId, itemName, price }
        ) {
    const {addCart} = useContext(CartContext);

    const handleAdd = () => {
        addCart({ id: itemId, name: itemName, price });
    };

    return (
        <div>
            <h2>Item Name: {itemName}</h2>
            <p>Price: ${price}.</p>
            <button onClick={handleAdd}>Add Cart</button>
        </div>
    );
}

export default Product;
