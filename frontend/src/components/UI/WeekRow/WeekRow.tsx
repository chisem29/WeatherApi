
import { FC } from 'react'

import styles from "./WeekRow.module.sass"
import useCombineReport from '../../../hooks/useCombineReport';

const getWeekDayByDate = (date: string) => {
  const dayOfWeek = new Date(date).getDay()
  return isNaN(dayOfWeek)
    ? null
    : [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ][dayOfWeek];
};

const WeekRow: FC = () => {

  const { weatherRep: data, city } = useCombineReport();

  console.log(city, data)

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
        {data?.slice(0, 7)?.map((elemWeather, index) => (
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
              tracking-tighter
              gap-y-3
              ${styles.elemWeek}
            `}
          >
            <span className="max-w-[100%]">
              {getWeekDayByDate(String(elemWeather.dt_txt).split(' ')[0])}
            </span>
            <img src=""/>
            <span>{273 - elemWeather.main.temp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeekRow