
import { useQuery } from '@tanstack/react-query';

import Layout from './components/layout/Layout';
import WeekRow from './components/UI/WeekRow/WeekRow';
import CarouselData from './components/UI/CarouselData/CarouselData';
import Main from './components/layout/Main/Main';

import WeatherWeekService from './services/weatherWeek.service';
import useCity from './hooks/useCity';

import './App.sass';

const weatherWeekService: WeatherWeekService = new WeatherWeekService(
  'f227fe6641bae569ca6d28d071d27db3',
);

const App = () => {

  const [city, setCity] = useCity("Tokyo")

  const { data: loc, isSuccess } = useQuery({
    queryKey: ['weather', 'week'],
    queryFn: () => weatherWeekService.getLoc(city),
    initialData: [],
    staleTime: 0,
    select : ([{lat, lon}]) => {
      return [lat, lon]
    },
  });

  return (
    <Layout 
      city={city}>
      <Main>
        <CarouselData 
          city={city}
          setCity={setCity}/>
        <WeekRow loc={loc}/>
      </Main>
    </Layout>
  );
};

export default App;
