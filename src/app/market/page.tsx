'use client'

import CardItem from "@/components/CardItem";
import Filters from "@/components/Filters";
import Header from "@/components/Header";
import Search from "@/components/Search";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export interface ItemInfo {
  name?: string
  image?: string
  item_id?: string
  city: string
  tier?: number
  quality?: number
  price?: number

}

export interface cityMarketPrices {
  city?: string
  prices: ItemInfo[]
}

export interface ResultProps {
  item?: string
  cities: cityMarketPrices[]
}


export default function Market() {
  const [grau,setGrau] = useState<number>()
  const [city, setCity] = useState<string>()
  const [quality,setQuality] = useState<number>()
  const [result, setResult] = useState<ResultProps>()

  const handleFilters = (tier: number | null, city: string | null, quality: number | null) => {
    //console.log({ tier, city, quality });
    if (grau != 0 || city != '' || quality != 0) {
      setGrau(tier ?? undefined)
      setCity(city ?? undefined)
      setQuality(quality ?? undefined)

    }
  }

  const handleResult = (data: ResultProps) => {
    
    console.log("data: ", data)
    setResult(data)

    data?.cities?.forEach((cityEntry: cityMarketPrices) => {
        console.log(`Preços em ${cityEntry.city}:`)
        cityEntry.prices?.forEach((priceEntry: ItemInfo) => {
        console.log(`Tier ${priceEntry.tier}, Qualidade ${priceEntry.quality}, Preço: ${priceEntry.price}`)
      })
    })
  }
  

 return (
   <div className="w-full h-full flex flex-col items-center gap-8">
        <Header/>
        <Search onResult={handleResult} tier={grau} city={city} quality={quality} />
        <Filters onFilters={handleFilters}/>
        {result && result != undefined && result?.cities?.length > 0 ? <ScrollArea className="w-full -top-4 h-[60vh] rounded-[10px]">

          {result && result?.cities?.map((CityBlock: cityMarketPrices) => (CityBlock.prices.map((item: ItemInfo) => (
            <CardItem data={item} key={uuid()} />
          ))
            
          ))}
        </ScrollArea> : <span className="loading loading-bars loading-xl"></span>}
   </div>
 );
}