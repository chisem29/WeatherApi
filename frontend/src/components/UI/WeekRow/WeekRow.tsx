
import { FC } from 'react'

import styles from "./WeekRow.module.sass"
import useLocCity from '../../../hooks/useLocCity';

const WeekRow: FC = () => {

  const {data:loc} = useLocCity({ city : "Tokyo"})

  return (
    <div
      className={`
        basis-3/12 
        max-lg:h-full
        lg:w-full
        max-lg:max-w-[50%]
        ${styles.weekRow}
        
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
              lg:h-full
              border-r-[1px]
              border-r-[#0000001f]
              border-solid
              border-t-[5px]
              border-t-[#631818]
              lg:max-w-[14.2867143%]
              px-5
            `}
          >
            <span>{elemWeather}</span>
            <p className="break-words max-w-[100%]">
              {['Mon', 'Thuse', 'Wendes', 'thurs', 'fri', 'satur', 'sun'][
                index
              ] + 'dayasdasdsadsadsdadasdas545fghjk'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeekRow