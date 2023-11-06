import React, { createContext, useState } from "react";
import { PRODUCTS } from '../components/productsData';

export const ShopContext = createContext(null);

const getDefaultCard = () => {
    let card = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        card[i] = 0;
    }
    return card;
}

export const ShopContextProvider = (props) => {
    const [cardItems, setCardItems] = useState(getDefaultCard);

    const addToCard = (itemID) => {
        setCardItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
        console.log(cardItems)
    };

    const removeFromCard = (itemID) => {
        setCardItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
    };

    const getTotalCardAmount = () => {
        let totalAmount = 0;
        for(const item in cardItems){
            if(cardItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cardItems[item] * itemInfo.price;
            }
        }

        return totalAmount;
    }

    const contextValue = { cardItems, addToCard, removeFromCard, getTotalCardAmount };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}
