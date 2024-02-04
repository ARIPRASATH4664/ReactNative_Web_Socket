export const ORDER_ACTION_TYPE = 'ORDER_ACTION_TYPE';

export const orderActionCreator = payload => {
  console.log("SUCK!!! ~ orderActionCreator ~ payload:", payload)

  return {
    type: ORDER_ACTION_TYPE,
    payload,
  };
};
