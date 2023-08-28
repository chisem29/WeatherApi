
import { FC, useContext } from "react"

import useLocCity from "../../../hooks/useLocCity";
import useWeatherReport from "../../../hooks/useWeatherReport";
import useCity from "../../../hooks/useCity";

import cityT from "@/shared/types/city";
import { CityContext } from '../../../providers/ContextProvider';

const CarouselData : FC = () => {

  const { cityIndex } = useContext(CityContext)

  const [city] = useCity(cityIndex);
  const { data: loc } = useLocCity(city as cityT);

  const { data: rep } = useWeatherReport({
    lat: Number(loc?.at(0)),
    lon: Number(loc?.at(1)),
  });

  return <div>{city as cityT} {loc?.at(0)}</div>
}

export default CarouselData