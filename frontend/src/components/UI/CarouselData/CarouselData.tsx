import { FC } from 'react';

import styles from './Carousel.module.sass';

import useCombineReport from './../../../hooks/useCombineReport';
import FallbackData from '../FallbackData/FallbackData';

import toCFromKelvin from '../../../functions/toCFromKelvin';
import DateDay from '../../../functions/DateDay';
import getImgByDes from '../../../functions/getImgByDes';
import getWindDirection from '../../../functions/getWindDirection';

import weatherListElemI from '@/shared/interfaces/weatherListElem';

const CarouselData: FC = () => {
  const { weatherRep: data, city, isLoading } = useCombineReport();

  const dataCurDay = data?.at(0) as weatherListElemI;

  console.log(dataCurDay)

  const InfoCurDay = new DateDay(dataCurDay?.dt_txt?.split(' '));

  return (
    <FallbackData {...{ isLoading }}>
      <>
        <div className="flex flex-col relative z-10 py-2 md:gap-y-1 text-slate-50">
          <div className={`${styles.headReport} items-center flex flex-col`}>
            <h2 className="text-[2em] font-light">{city}</h2>
            <p className="capitalize text-slate-200 tracking-wide break-words">
              {InfoCurDay.getWeekDay()}, {InfoCurDay.getMonthDay()}{' '}
              {InfoCurDay.getNumDay()}, {InfoCurDay.getTimeDay()}
            </p>
          </div>
          <div
            className={`flex container max-lg:flex-col gap-x-1 items-center justify-center ${styles.mainReport}`}
          >
            <div
              className={`
              tracking-wider
              text-end
            `}
            >
              <div className={`text-[7em] font-extralight`}>
                {toCFromKelvin(dataCurDay?.main?.temp)}
              </div>
              <div className={`mr-2 -mt-[20px]`}>
                {toCFromKelvin(dataCurDay?.main?.feels_like)} feels
              </div>
            </div>
            <div className={`flex flex-col items-center`}>
              <img
                className="object-fill w-[300px] drop-shadow-[5px_30px_40px_#ddd]"
                src={getImgByDes(dataCurDay?.weather?.at(0)?.description)}
              />
              <div className="tracking-wide rounded-lg bg-[#1b1a1a7e] px-3 py-1 capitalize">
                {dataCurDay?.weather?.at(0)?.description.split(' ').join(', ')}
              </div>
            </div>
            <div>
              <ul className={`flex flex-col gap-y-2`}>
                {[
                  {
                    key: 'pressure',
                    src: 'https://img.icons8.com/?size=1x&id=101236&format=png',
                    aspect: 'auto',
                    info: `${Math.round(dataCurDay?.main?.pressure * 0.750064)} mm Hg`,
                  },
                  {
                    key: 'humidity',
                    src: 'https://img.icons8.com/?size=1x&id=18585&format=png',
                    aspect: '[4/3]',
                    info: `${dataCurDay?.main?.humidity}% humidity`,
                  },
                  {
                    key: 'wind',
                    src: 'https://img.icons8.com/?size=1x&id=107769&format=png',
                    aspect: '[4/3]',
                    info: `${Math.round(dataCurDay?.wind?.speed)}m/s`,
                  },
                ].map(({ src, key, aspect, info }) => (
                  <li key={key} className="flex items-center gap-x-2">
                    <img
                      className={`invert w-[50px] aspect-${aspect}`}
                      src={src}
                    />
                    <div className="text-slate-200 tracking-wide">{info}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    </FallbackData>
  );
};

export default CarouselData;
