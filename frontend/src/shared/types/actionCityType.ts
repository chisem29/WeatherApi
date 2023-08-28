type actionCityIndexT = {
  payload? : number;
  type: 'INCREMENT' | 'DECREMENT' | 'TOZERO' | 'TOLENGTH';
};

export default actionCityIndexT