import { FC } from 'react';

import useCombineReport from './../../../hooks/useCombineReport';

const CarouselData: FC = () => {
  const { weatherRep: data, city } = useCombineReport();

  return <div className="relative z-1">{city}<h4>{Math.round((data?.at(0)?.main?.feels_like ?? 0)) - 273.15}</h4></div>;
};

export default CarouselData;
