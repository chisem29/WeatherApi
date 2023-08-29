import { FC, useContext } from 'react';

import cityT from '@/shared/types/city';
import useCombineReport from './../../../hooks/useCombineReport';

const CarouselData: FC = () => {
  
  const { weatherRep:data, city } = useCombineReport()

  return (
    <div>
      {city as cityT}
    </div>
  );
};

export default CarouselData;
