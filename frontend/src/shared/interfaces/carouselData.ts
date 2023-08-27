import cityT from '../types/city';

interface carouselDataI {
  city: cityT;
  setCity: React.Dispatch<React.SetStateAction<cityT>>;
}

export default carouselDataI;
