export const ORDER_ACTION_TYPE = 'ORDER_ACTION_TYPE';

export const orderActionCreator = payload => {
  return {
    type: ORDER_ACTION_TYPE,
    payload,
  };
};
