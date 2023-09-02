
import weatherListElemI from "./weatherListElem";

interface weatherRepI {
  cod: string;
  message: any;
  cnt?: number;
  list: Array<Partial<weatherListElemI>>;
  city?: any
}

export default weatherRepI
