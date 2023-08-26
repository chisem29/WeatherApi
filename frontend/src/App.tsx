
import Layout from './components/layout/Layout';
import WeekRow from './components/UI/WeekRow/WeekRow';
import CarouselData from './components/UI/CarouselData/CarouselData';
import Main from './components/layout/Main/Main';

import useCity from './hooks/useCity';

import './App.sass';

// MY PERSONAL COMMIT AND MORE s

const App = () => {

  const [city, setCity] = useCity("Tokyo")

  return (
    <Layout 
      city={city}>
      <Main>
        <CarouselData 
          city={city}
          setCity={setCity}/>
        <WeekRow />
      </Main>
    </Layout>
  );
};

export default App;
