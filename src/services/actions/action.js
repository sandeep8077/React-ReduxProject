import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";
const addTocart = (data) => {
    console.log("Action")
    return {
        type: ADD_TO_CART,
        data: data
    }
}

const removeToCart = (data) => {
    console.warn('action')

    return {
        type: REMOVE_TO_CART,

    }
}






export { addTocart, removeToCart };