import actionCityIndexT from "../shared/types/actionCityType";

const cityIndexReducer = (state: any, action: actionCityIndexT) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'TOZERO':
      return 0;
    case 'TOLENGTH':
      return action?.payload;
    default:
      break;
  }
};

export default cityIndexReducer;
