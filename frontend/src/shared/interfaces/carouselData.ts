
import cityIndexT from '../types/cityIndex';

interface carouselDataI {
  cityIndex:  cityIndexT
  setIndex: React.Dispatch<React.MouseEvent<HTMLSpanElement, MouseEvent>>;
}

export default carouselDataI;
