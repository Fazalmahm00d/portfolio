"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Modal from "../animata/overlay/modal"
import useWindowResize from "../reused-components/useWindowResize"

const proj1details={
  projectname:"TOTC",
  projectdesc:"Education platform",
  projectlang:[
    "REACTJS","NEXTJS","REDUX"
  ],
  projectlink:"https://",
  projectcode:"https://",
  videoId:"KHxX0CgMGs4?si=M0y67NRimTMPuFyQ"
}
const proj2details={
  projectname:"Furniro",
  projectdesc:"Eccommerce platform",
  projectlang:[
    "REACTJS","NEXTJS","REDUX"
  ],
  projectlink:"https://",
  projectcode:"https://",
  videoId:"_J8nRavQJys?si=8_E-My1Ev7veHtPE"
}
function HomeCompo4(){
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
  
    React.useEffect(() => {
      if (!api) {
        return
      }
  
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
  
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])
    const windowWidth = useWindowResize();
    console.log(windowWidth,"window width")
    
    return(
        <div className=" min-h-screen 2xl:h-screen bg-[#1A1E23] relative flex justify-center items-center overflow-hidden ">
         <img src="/bgimage2.png" className=" relative top-0 h-full"/>
         <img src="/bgimage2.png" className=" relative top-0 h-full"/>
         <div className="absolute container top-0 w-full min-h-screen flex flex-col items-center justify-center">
         <div className="hidden 2xl:flex flex-col items-center justify-center">
                <svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_25_645)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V28C32 36.8366 24.8366 44 16 44H14V43.8762C6.10738 42.892 0 36.1592 0 28V16ZM16 40C22.6274 40 28 34.6274 28 28V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V28C4 34.6274 9.37258 40 16 40Z" fill="#12F7D6"/>
                <path d="M17.3332 9.16675V16.5001H14.6665V9.16675H17.3332Z" fill="#12F7D6"/>
                </g>
                <defs>
                <clipPath id="clip0_25_645">
                <rect width="32" height="44" fill="white"/>
                </clipPath>
                </defs>
                </svg>

                    <img src="/Arrow 1.png"/>
                </div>
                <div className="flex flex-col items-center justify-center">
                <h1 className="text-[#12F7D6]  text-6xl border-b-4 border-[#12F7D6] py-4">Works</h1>
                <p className="mono mt-2 ">I had the pleasure of working with these awesome projects</p>
            </div>
            <div className="h-full ">
            <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="max-w-sm h-[500px] lg:max-w-lg "
            >
        <CarouselContent className="h-[500px] w-fit lg:w-full">
                <CarouselItem className="relative w-fit lg:w-full h-[500px]">
                  <img src="/container.png" className="w-fit h-[500px] object-contain object-contain" />
                  <Modal   details={proj1details}/>
                 
                </CarouselItem>
                <CarouselItem className="relative  w-fit lg:w-full h-[500px] lg:h-auto  object-contain" >
                <img
                  src="/container.png"
                  className="w-full h-[500px] object-contain"
                  alt="Responsive Image"
                />
                  <Modal details={proj2details}/>
    
                   
                </CarouselItem>
                   
        </CarouselContent>
        <CarouselPrevious className="w-16 h-16" />
        <CarouselNext className="w-16 h-16"/>
          </Carousel>

        </div>
            
        </div>
    </div>
    )
}

export default HomeCompo4