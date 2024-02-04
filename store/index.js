import {createStore} from 'redux';
import {ORDER_ACTION_TYPE} from './action';

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  // Handle different action types and update the state accordingly
  switch (action.type) {
    case ORDER_ACTION_TYPE:
      let ord = state.orders;
      ord.push({
          amount: action.payload.amount,
          price: action.payload.price,
        });
    // console.log("SUCK!!! ~ orderReducer ~ obj:", ord)
      return {
        orders: [...ord],
      };
    default:
      return state;
  }
};

const store = createStore(orderReducer);

export default store;
