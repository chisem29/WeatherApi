import { useEffect } from 'react';

import cityT from '@/shared/types/city';
import queryRefetchI from '@/shared/interfaces/queryRefetch';

const useRefetchByCity = ({
  refetch,
  city,
}: queryRefetchI & { city: cityT }) => {
  const refetchByCity = () => {
    useEffect(() => {
      refetch();
    }, [city]);
  };

  return { refetchByCity };
};

export default useRefetchByCity;
