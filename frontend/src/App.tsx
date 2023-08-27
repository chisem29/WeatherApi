import Layout from './components/layout/Layout';
import WeekRow from './components/UI/WeekRow/WeekRow';
import CarouselData from './components/UI/CarouselData/CarouselData';
import Main from './components/layout/Main/Main';

import useCity from './hooks/useCityIndex';

import SupsensData from './components/UI/SupsensData/SupsensData';
import cityIndexT from './shared/types/cityIndex';

import './App.sass';

const App = () => {
  const [cityIndex, setIndex] = useCity(1);

  return (
    <Layout cityIndex={cityIndex as cityIndexT}>
      <Main>
        <SupsensData>
          <CarouselData
            cityIndex={cityIndex as cityIndexT}
            setIndex={
              setIndex as React.Dispatch<
                React.MouseEvent<HTMLSpanElement, MouseEvent>
              >
            }
          />
        </SupsensData>
        <SupsensData>
          <WeekRow cityIndex={cityIndex as cityIndexT} />
        </SupsensData>
      </Main>
    </Layout>
  );
};

export default App;
