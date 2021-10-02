import axios from 'axios';

//ACTION TYPES

const ACTIVE_SUBSCRIPTIONS = 'ACTIVE_SUBSCRIPTIONS';

//ACTION CREATORS

const activateSubcription = (quantity) => {
  return {
    type: ACTIVE_SUBSCRIPTIONS,
    subscribed: true,
    quantity
  };
};


//THUNK CREATORS

export const _activeSubcription = (quantity) => {
  return (dispatch) => {
    dispatch(activateSubcription(quantity));
  };
};
//INITIAL STATE
const initialState = {
  subscribed: false,
  quantity: 0
}

//REDUCER

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIVE_SUBSCRIPTIONS:
      return {...state, subscribed: action.subscribed, quantity: action.quantity}
    default:
      return state
  };
};