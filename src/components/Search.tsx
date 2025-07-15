'use client'

import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { getItemPrices } from "@/lib/api";
import { ResultProps } from "@/app/market/page";
import { useDebounce } from "@/hooks/debounce_hook";


export interface SearchProps {
  onResult: (data: ResultProps) => void
  tier?: number 
  city?: string 
  quality?: number 
}

export default function Search({onResult, tier, city, quality}: SearchProps) {
    const [text, setText] = useState("")

    const debouncedText = useDebounce(text, 500);

    console.log({tier, city, quality})
    console.log(text)

    useEffect(() => {
      if (!debouncedText) return

      const fetchData = async () => {
        
        try {
              const data = await getItemPrices(debouncedText, {tier, city, quality})
              onResult?.(data)

            } catch (err) {
              console.log("Item não encontrado!", err)
            }
        
        //console.log(data)
      }
      fetchData()
      
    }, [tier, city, quality])
    
    
    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key == 'Enter') {
          try {
              const data = await getItemPrices(debouncedText, {tier, city, quality})
              onResult?.(data)

            } catch (err) {
              console.log("Item não encontrado!", err)
            }
        }
      }

    

    

    return (
        <div className="w-full min-h-10 flex justify-center 2xl:px-[5vw] 2xl:gap-5 px-9">
            
            <Input className="px-6 w-[80vw] 2xl:w-[48vw] h-full border-orange-400 text-zinc-400 text-center "
                placeholder="Buscar item"
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleSearch}
            />
            <button className="hidden 2xl:block w-[40px] h-[40px] bg-orange-400 hover:bg-yellow-700 justify-center items-center rounded-lg">
                <SearchIcon className="ml-2 hover:text-zinc-100 text-zinc-100" size={24}  /> 
            </button>
        </div>
    );
}
