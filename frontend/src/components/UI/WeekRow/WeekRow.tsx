
import { FC } from 'react'

import styles from "./WeekRow.module.sass"
import useLocCity from '../../../hooks/useLocCity';
import carouselDataI from '@/shared/interfaces/carouselData';
import useWeatherReport from '../../../hooks/useWeatherReport';
import useCity from '../../../hooks/useCity';
import cityT from '@/shared/types/city';

const WeekRow: FC<Pick<carouselDataI, "cityIndex">> = ({ cityIndex }) => {

  const [ city ] = useCity(cityIndex)

  const {data:loc} = useLocCity((city as cityT))

  const { } = useWeatherReport({
    lat: loc?.at(0) ?? 0,
    lon: loc?.at(1) ?? 0,
  });

  return (
    <div
      className={`
        basis-3/12 
        max-lg:h-full
        lg:w-full
        max-lg:max-w-[50%]
        ${styles.weekRow}
        max-lg:overflow-hidden
        max-lg:min-w-[150px]
      `}
    >
      <ul
        className={`
           list-none
           flex
           lg:flex-row
           w-full
           h-full
           flex-col
           snap-mandatory
           snap-y
           max-lg:overflow-y-scroll
           relative
        `}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((elemWeather, index) => (
          <li
            key={index}
            className={`
              flex
              lg:flex-col
              basis-[14.2867143%]
              justify-center
              items-center
              backdrop-blur-md
              bg-[#69373754]
              border-r-[1px]
              border-r-[#0000001f]
              border-solid
              border-t-[5px]
              border-t-[#631818]
              lg:max-w-[14.2867143%]
              h-full
              h-min-[200px]
              px-5
              py-2
              snap-start
            `}
          >
            <p className="break-words max-w-[100%]">
              {['Mon', 'Thuse', 'Wendes', 'thurs', 'fri', 'satur', 'sun'][index]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeekRow