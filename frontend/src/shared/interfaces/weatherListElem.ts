interface weatherListElemI {
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  wind: { speed: number, deg : number  };
}

export default weatherListElemI