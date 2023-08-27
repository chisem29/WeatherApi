import Layout from './components/layout/Layout';
import WeekRow from './components/UI/WeekRow/WeekRow';
import CarouselData from './components/UI/CarouselData/CarouselData';
import Main from './components/layout/Main/Main';

import useCity from './hooks/useCity';
import cityT from './shared/types/city';

import './App.sass';
import SupsensData from './components/UI/SupsensData/SupsensData';

const App = () => {
  const [city, setCity] = useCity('Paris');

  return (
    <Layout city={city as cityT}>
      <Main>
        <SupsensData>
          <CarouselData
            city={city as cityT}
            setCity={setCity as React.Dispatch<React.SetStateAction<cityT>>}
          />
        </SupsensData>
        <SupsensData>
          <WeekRow city={city as cityT} />
        </SupsensData>
      </Main>
    </Layout>
  );
};

export default App;
