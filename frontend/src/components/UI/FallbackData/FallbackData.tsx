import { DefinedUseQueryResult } from '@tanstack/react-query';
import { FC } from 'react';

const FallbackData: FC<Partial<DefinedUseQueryResult>> = ({ isError, isLoading }) => {
  return <>{isError ? <h1> Error loading data </h1> : isLoading ? <h1> Loading data... </h1> : <h1> Loading...</h1>}</>;
};

export default FallbackData;
