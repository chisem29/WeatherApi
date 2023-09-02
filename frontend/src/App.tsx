import Layout from './components/layout/Layout';
import WeekRow from './components/UI/WeekRow/WeekRow';
import Carousel from './components/UI/Carousel/Carousel';
import Main from './components/layout/Main/Main';
import CarouselData from './components/UI/CarouselData/CarouselData';

import ContextProvider from './providers/ContextProvider';
import QueryProvider from './providers/QueryProvider';

import { QueryClient } from '@tanstack/react-query';

import './App.sass';

const targetQueryClient = new QueryClient();

const App = () => {
  return (
    <QueryProvider client={targetQueryClient}>
      <ContextProvider>
        <Layout>
          <Main>
            <Carousel>
              <CarouselData />
            </Carousel>
            <WeekRow />
          </Main>
        </Layout>
      </ContextProvider>
    </QueryProvider>
  );
};

export default App;
