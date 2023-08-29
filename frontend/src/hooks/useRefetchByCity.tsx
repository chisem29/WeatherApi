import { useEffect } from 'react';
import { DefinedUseQueryResult } from '@tanstack/react-query';

import cityT from '@/shared/types/city';

const useRefetchByCity = ({
  refetch,
  city,
}: Pick<DefinedUseQueryResult, 'refetch'> & { city: cityT }) => {
  const refetchByCity = () => {
    useEffect(() => {
      refetch();
    }, [city]);
  };

  return { refetchByCity };
};

export default useRefetchByCity;
