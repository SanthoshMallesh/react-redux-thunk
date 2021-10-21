import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
  cart: [],
  currentItem: null,
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find((product) => product.id === payload.id);
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );

      console.log("state : ", state);

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case ActionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id ? { ...item, qty: +payload.qty } : item
        ),
      };
    case ActionTypes.LOAD_CURRENT_ITEM:
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
