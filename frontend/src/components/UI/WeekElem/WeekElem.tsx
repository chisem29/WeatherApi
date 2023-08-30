import { FC } from 'react';

import styles from './WeekElem.module.sass';
import DateDay from '../../../functions/DateDay';

import weatherListElemI from '@/shared/interfaces/weatherListElem';

const WeekElem: FC<
  Pick<weatherListElemI, 'dt_txt' | 'weather' | 'main'> & { index: number }
> = ({ dt_txt, index, weather, main: { temp } }) => {
  const DateElem = new DateDay(dt_txt.split(' ')[0]);
  const description = weather[0].description

  return (
    <li
      key={index}
      className={`
              flex
              flex-col
              lg:basis-[14.2867143%]
              lg:justify-center
              justify-end
              items-center
              backdrop-blur-md
              border-r-[1px]
              border-r-[#0000001f]
              border-solid
              border-t-[5px]
              ${
                description?.includes('mist') ||
                description?.includes('cloud')
                  ? `bg-[#5e565654]`
                  : description?.includes('rain') ||
                    description?.includes('snow') ||
                    description?.includes('storm')
                  ? `bg-[#3b79ac1c]`
                  : `bg-[#574c3e50]`
              }
              ${
                description?.includes('cloud')
                  ? `border-t-[#bebebe]`
                  : description?.includes('rain')
                  ? `border-t-[#5e95c2]`
                  : `border-t-[#c5be62]`
              }
              lg:max-w-[14.2867143%]
              h-full
              min-h-[100px]
              px-5
              snap-start
              tracking-tighter
              ${styles.elemWeek}
            `}
    >
      <div className="max-lg:basis-1/3">{DateElem.getWeekDay()}</div>
      <img
        className="flex relative scale-75 max-lg:basis-1/3 max-lg:h-1/3"
        src={
          description === 'clear sky'
            ? `http://openweathermap.org/img/wn/01d@2x.png`
            : description === 'few clouds'
            ? `http://openweathermap.org/img/wn/02d@2x.png`
            : description === `scattered clouds`
            ? `http://openweathermap.org/img/wn/03d@2x.png`
            : description === `broken clouds`
            ? `http://openweathermap.org/img/wn/04d@2x.png`
            : description === `shower rain`
            ? `http://openweathermap.org/img/wn/09d@2x.png`
            : description === `rain`
            ? `http://openweathermap.org/img/wn/10d@2x.png`
            : description === `thunderstorm`
            ? `http://openweathermap.org/img/wn/11d@2x.png`
            : description === `snow`
            ? `http://openweathermap.org/img/wn/13d@2x.png`
            : `http://openweathermap.org/img/wn/50d@2x.png`
        }
      />
      <div className="tracking-wider max-lg:basis-1/3">
        {Math.floor(temp - 273.15) >= 0 ? '+' : '-'}
        {Math.floor(temp - 273.15)}
      </div>
    </li>
  );
};

export default WeekElem;
