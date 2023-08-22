import Layout from './components/layout/Layout';

import QueryProvider from './providers/QueryProvider';
import { QueryClient } from '@tanstack/react-query';

import WeekRow from './components/UI/WeekRow/WeekRow';
import CarouselData from './components/UI/CarouselData/CarouselData';
import Main from './components/layout/Main/Main';

import './App.sass';

const targetQueryClient = new QueryClient();

const App = () => {
  return (
    <QueryProvider client={targetQueryClient}>
      <Layout>
        <Main>
          <CarouselData />
          <WeekRow /> 
        </Main>
      </Layout>
    </QueryProvider>
  );
};

export default App;
