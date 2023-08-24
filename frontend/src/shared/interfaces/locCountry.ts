interface locCountryI {
  lat: number;
  lon: number;
  country: string;
  local_names: any;
  name: 'Moscow' | 'Tokyo' | 'NeyYourk' | 'Paris';
  state: string;
}

export default locCountryI;
