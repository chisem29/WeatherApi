import cityT from '../types/city';

interface carouselDataI {
  city:
    | cityT
    | React.Dispatch<{
        payload: any;
        type: string;
      }>;
  setCity:
    | cityT
    | React.Dispatch<{
        payload: any;
        type: string;
      }>;
}

export default carouselDataI
