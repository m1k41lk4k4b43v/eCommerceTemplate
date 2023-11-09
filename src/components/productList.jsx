import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import { PRODUCTS } from './productsData';

const ProductList = (props) => {

    const { addToCard, cardItems } = useContext(ShopContext);

    return (
        <div className='flex justify-center items-center'>
            <div>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {PRODUCTS.map((product, index) => (
                        <div key={index} className="px-6 py-8 border border-gray-200 rounded-2xl space-y-3 shadow-md">
                            <div className='flex justify-center items-center'>
                                <img className='h-[15em]' src={product.productImage} alt="" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">{product.productName}</h2>
                            </div>
                            <div>
                                <p className="text-gray-600">${product.price}</p>
                            </div>
                            <div>
                                <button onClick={() => addToCard(product.id)} 
                                className='bg-black border text-white rounded-md px-4 py-2 hover:bg-transparent
                                 hover:text-black hover:border-black'>Add to Cart {cardItems[product.id] > 0 ? `(${cardItems[product.id]})` : ''}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;
