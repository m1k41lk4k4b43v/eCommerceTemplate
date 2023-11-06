import React, { useContext } from 'react';
import PRODUCTS from "./productsData";
import { ShopContext } from '../context/shop-context';

const Card = () => {
    const { cardItems, addToCard, removeFromCard, getTotalCardAmount } = useContext(ShopContext);
    const totalAmount = getTotalCardAmount();

    return (
        <div> 
            <div id="card" className="flex justify-center items-center pt-12">
                <div>
                    <div className='flex justify-center items-center py-12 text-4xl font-semibold'>
                        Items
                    </div>
                    <div className='grid gap-12'>
                        {PRODUCTS.map((product) => {
                            if (cardItems[product.id] !== 0) {
                                return (
                                    <div key={product.id} className='flex justify-center items-center space-x-4 border px-12 py-4 rounded-3xl bg-white shadow-xl'>
                                        <div>
                                            <img className='h-[13em]'
                                                src={product.productImage}
                                                alt='productImage'
                                            />
                                        </div>
                                        <div className='space-y-4'>
                                            <div>
                                                <h2 className='text-xl font-semibold'>{product.productName}</h2>
                                            </div>
                                            <div>
                                                <p className='text-gray-600'>${product.price}</p>
                                            </div>
                                            <div className='flex space-x-3 justify-start items-center'>
                                                <button onClick={() => removeFromCard(product.id)} className='text-2xl'> - </button>
                                                <p>{cardItems[product.id]}</p>
                                                <button onClick={() => addToCard(product.id)} className='text-2xl'> + </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center py-12'>
                <p className='text-4xl font-semibold'>Subtotal: <span className='text-green-600'>${totalAmount}</span> </p>
            </div>
        </div>
    );
}

export default Card;
