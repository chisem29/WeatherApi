import { FC } from 'react';

import styles from './WeekElem.module.sass';
import DateDay from '../../../functions/DateDay';
import toCFromKelvin from '../../../functions/toCFromKelvin';

import weatherListElemI from '@/shared/interfaces/weatherListElem';
import FallbackData from '../FallbackData/FallbackData';
import queryIsLoading from '@/shared/interfaces/queryIsLoading';
import getImgByDes from '../../../functions/getImgByDes';

const WeekElem: FC<
  Partial<Omit<weatherListElemI, 'wind'>> &
    queryIsLoading & {
      index: number;
    }
> = ({ index, main, weather, dt_txt, isLoading }) => {
  const DateElem = new DateDay(dt_txt?.split(' '));
  const description = weather?.at(0)?.description ?? '';
  const temp = main?.temp ?? 0;

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
                description.includes('mist') || description.includes('cloud')
                  ? `bg-[#5e565654]`
                  : description.includes('rain') ||
                    description.includes('snow') ||
                    description.includes('storm')
                  ? `bg-[#3b79ac1c]`
                  : `bg-[#574c3e50]`
              }
              ${
                description.includes('mist') ||
                (description.includes('cloud') && !description.includes('few'))
                  ? `border-t-[#bebebe]`
                  : description.includes('rain') ||
                    description.includes('snow') ||
                    description.includes('storm')
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
      <FallbackData {...{ isLoading }}>
        <>
          <div className="max-lg:basis-1/3">{DateElem.getWeekDay()}</div>
          <img
            className="flex relative scale-75 max-lg:basis-1/3 max-lg:h-1/3"
            src={getImgByDes(description)}
          />
          <div className="tracking-wider max-lg:basis-1/3">
            {toCFromKelvin(temp)}
          </div>
        </>
      </FallbackData>
    </li>
  );
};

export default WeekElem;
