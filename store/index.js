import {createStore} from 'redux';
import {ORDER_ACTION_TYPE} from './action';

const initialState = {
  orders: {},
};

const orderReducer = (state = initialState, action) => {
  // Handle different action types and update the state accordingly
  switch (action.type) {
    case ORDER_ACTION_TYPE:
        console.log("SUCK!!! ~ orderReducer ~ obj:", state)
      let ord = state.orders;
      ord[action.payload.price] = action.payload.amount;
      return {
        orders: {...ord},
      };
    default:
      return state;
  }
};

const store = createStore(orderReducer);

export default store;
