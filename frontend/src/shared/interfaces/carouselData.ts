
import actionCityIndexT from '../types/actionCityType';
import cityIndexT from '../types/cityIndex';

interface carouselDataI {
  cityIndex: cityIndexT;
  setIndex: React.Dispatch<actionCityIndexT>;
}

export default carouselDataI;
