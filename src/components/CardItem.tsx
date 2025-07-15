import {  ItemInfo } from "@/app/market/page";
import Image from "next/image";

export interface CardProps {
  data: ItemInfo
}



export default function CardItem({data}: CardProps) {

  function getCityColor(city: string): string {
    switch (city.toLowerCase()) {
      case "caerleon":
        return "bg-pink-500";
      case "bridgewatch":
        return "bg-amber-500";
      case "fort sterling":
        return "bg-cyan-600";
      case "lymhurst":
        return "bg-lime-700";
      case "thetford":
        return "bg-purple-500";
      case "martlock":
        return "bg-sky-500";
      default:
        return "text-gray-400";
    }
  }

 return (
  <div className="w-full rounded-xl lg:w-[99vw] h-[22vh] lg:h-[18vh] flex flex-col justify-center px-9 2xl:px-[25vw]">
    <div className="my-4 bg-[#222222] w-full h-[20vh] 2xl:h-[16vh] rounded-lg shadow-black/20 shadow-md flex flex-col items-center lg:items-start">
      <span className="mt-4 lg:ml-8 font-bold text-sm 2xl:text-lg lg:mt-4">{data && data != undefined && data.name}</span>
      <div className="mb-4 lg:ml-4 w-full h-[20vh] 2xl:h-[15vh] rounded-lg flex flex-row items-center">
          { data && data.image && <Image className="ml-2 mt-2 lg:mt-0 lg:mb-4 w-[80px] h-[80px] 2xl:w-[80px] 2xl:h-[80px]" width={80} height={80} src={data.image} alt="" />}
          <div className=" flex flex-col lg:ml-4">
            
            
            <div className="w-[50vw] mt-2 grid grid-cols-1 2xl:grid-cols-6 grid-rows-2 text-xs gap-2 2xl:gap-5 lg:mt-5">
              <span className={`font-bold text-center ${getCityColor(data?.city)} text-zinc-50 rounded-[4px] py-0.5 px-1.5`}>{data?.city}</span>
              <span className="font-bold text-center bg-zinc-600 text-zinc-50 rounded-[4px] py-0.5 px-1.5">{data?.price} pratas </span>
              
            </div>
            <div className="mt-2 w-[50vw] flex flex-row justify-between lg:justify-start 2xl:-mt-5 gap-8 2xl:mb-10">
              <span className="font-bold text-xs text-center bg-zinc-500 text-zinc-50 rounded-[4px] py-0.5 px-1.5">Qualidade: {data?.quality}</span>
              <span className="font-bold text-xs text-center bg-zinc-500 text-zinc-50 rounded-[4px] py-0.5 px-1.5">Grau: {data?.tier}</span>

            </div>
          </div>
      </div>
      
   </div>
   
  </div>
 );
}