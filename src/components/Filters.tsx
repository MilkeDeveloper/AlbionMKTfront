'use client'

import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

export interface filterProps {
  tier?: number | null
  city?: string
  quality?: number | null
}

interface FiltersProps {
  onFilters: (tier: number | null, city: string | null, quality: number | null ) => void;
}

export default function Filters({onFilters}: FiltersProps) {
    const [tier, setTier] = useState<number | null>(null)
    const [city, setCity] = useState<string | null>(null)
    const [quality, setQuality] = useState<number | null>(null)
    

    const handleSetTier = (value: string) => {
        if (value !== "tier all") {
            const numericTier = parseInt(value.replace("tier ", ""))
            console.log("grau:", numericTier)
            setTier(numericTier)
        } else {
            setTier(null)
        }
    }

    const handleSetCity = (value: string) => {
        if (value !== "city all") {
            const cidade = value.replace("city ", "")
            console.log("cidade:", cidade)
            setCity(cidade)
        } else (
            setCity(null)
        )
    }

    const handleSetQuality = (value: string) => {
        if (value !== "quality all") {
            const numericQuality = parseInt(value.replace("quality ", ""))
            console.log("qualidade:", numericQuality)
            setQuality(numericQuality)
        } else {
            setQuality(null)
        }
    }

    useEffect(() => {
      onFilters(tier, city, quality)
      
    }, [tier, city, quality])
    
    
        


 return (
   <div className="w-full h-14 flex flex-row justify-between px-9 2xl:px-[30vw]">
        <Select onValueChange={handleSetTier}>
            <SelectTrigger className="w-[20vw] 2xl:w-[10vw] ">
                <SelectValue className="text-zinc-500" placeholder="Grau" />

            </SelectTrigger>
            <SelectContent className="min-w-[5vw] border-orange-400 border-none bg-[#222222]">
                <SelectGroup>
                    <SelectLabel>Grau</SelectLabel>
                    <SelectItem className="focus:text-orange-400 focus:bg-[#222222]" value="tier all">Todos</SelectItem>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((t) => (
                        <SelectItem
                        key={t}
                        value={`tier ${t}`}
                        className="focus:text-orange-400 focus:bg-[#222222]"
                        >
                        T{t}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
        <Select onValueChange={handleSetCity}>
            <SelectTrigger className="w-[25vw] 2xl:w-[10vw] ">
                <SelectValue placeholder="City" />
            </SelectTrigger>
                <SelectContent className="min-w-[5vw] border-orange-400 border-none bg-[#222222]">
                <SelectGroup>
                    <SelectLabel>City</SelectLabel>
                    <SelectItem className="focus:text-orange-400 focus:bg-[#222222]" value="city all">Todas</SelectItem>
                    {["Bridgewatch", "Lymhurst", "Thetford", "Martlock", "Fort Sterling", "Caerleon"].map((city) => (
                        <SelectItem
                        key={city}
                        value={`city ${city}`}
                        className="focus:text-orange-400 focus:bg-[#222222]"
                        >
                        {city}
                        </SelectItem>
                    ))}
                    
                </SelectGroup>
            </SelectContent>

        </Select>
        <Select onValueChange={handleSetQuality}>
            <SelectTrigger className="w-[28vw] 2xl:w-[10vw]">
                <SelectValue placeholder="Quality" />
            </SelectTrigger>
            <SelectContent className="min-w-[5vw] border-orange-400 border-none bg-[#222222]">
                <SelectGroup>
                    <SelectLabel>Grau</SelectLabel>
                    <SelectItem className="focus:text-orange-400 focus:bg-[#222222]" value="quality all">Todas</SelectItem>
                    {[1, 2, 3, 4, 5].map((q) => (
                        <SelectItem
                        key={q}
                        value={`quality ${q}`}
                        className="focus:text-orange-400 focus:bg-[#222222]"
                        >
                        Qualidade {q}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
   </div>
 );
}
