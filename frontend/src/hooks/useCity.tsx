import { useState } from "react"

import cities from "../data/cities.json"

import cityT from "@/shared/types/city"
import cityIndexT from "@/shared/types/cityIndex"

const useCity = (cityIndex : cityIndexT) => {
  const [ city, setCity ] = useState<cityT>((cities[cityIndex] as cityT))

  return [ city, setCity ]
}

export default useCity