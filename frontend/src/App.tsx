
import Layout from './components/layout/Layout';
import WeekRow from './components/UI/WeekRow/WeekRow';
import Carousel from './components/UI/Carousel/Carousel';
import Main from './components/layout/Main/Main';
import SupsensData from './components/UI/SupsensData/SupsensData';
import CarouselData from './components/UI/CarouselData/CarouselData';

import useCityIndex from './hooks/useCityIndex';

import ContextProvider from './providers/ContextProvider';
import QueryProvider from './providers/QueryProvider';
import { QueryClient } from '@tanstack/react-query';

import './App.sass';
import cityIndexT from './shared/types/cityIndex';

const targetQueryClient = new QueryClient();

const App = () => {

  return (
    <QueryProvider client={targetQueryClient}>
      <ContextProvider>
        <Layout>
          <Main>
            <Carousel >
              <SupsensData>
                <CarouselData  />
              </SupsensData>
            </Carousel>
            <SupsensData>
              <WeekRow />
            </SupsensData>
          </Main>
        </Layout>
      </ContextProvider>
    </QueryProvider>
  );
};

export default App;
