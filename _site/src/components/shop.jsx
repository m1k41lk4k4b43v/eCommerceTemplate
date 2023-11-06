import React from "react";
import ProductList from './productList';



const Shop = () => {

    return (
        <div className="flex justify-center items-center pt-12">
            <div>
                <div className="text-center py-12">
                    <h1 className="text-4xl font-semibold mb-4">Online Shopping</h1>
                </div>
                <div>
                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default Shop;
