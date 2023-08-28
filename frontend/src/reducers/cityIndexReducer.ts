import actionCityIndexT from '../shared/types/actionCityType';
import {
  DECREMENT,
  INCREMENT,
  TOLENGTH,
  TOZERO,
} from '../actions/cityIndexActions';

const cityIndexReducer = (state: any, action: actionCityIndexT) => {
  switch (action.type) {
    case DECREMENT:
      return state - 1;
    case INCREMENT:
      return state + 1;
    case TOZERO:
      return 0;
    case TOLENGTH:
      return action?.payload;
  }
};

export default cityIndexReducer;
