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
    return(
        <div className=" h-[80vh] md:h-[120vh] 2xl:h-screen bg-[#1A1E23] relative flex overflow-hidden">
         <img src="/bgimage2.png" className=" relative top-0 h-full w-fit"/>
         <img src="/bgimage2.png" className=" relative top-0 h-full"/>
         <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
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
            <div className=" ">
            <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className=" w-64 md:w-[600px] 2xl:w-[900px] "
            >
        <CarouselContent >
                <CarouselItem className="">
                  <img src="/container.png" className="relative  "/>
                  <div className="absolute  top-30 left-10 z-50  mono text-2xl border-b-4 border-white"> 
                    <Modal  details={proj1details}/>
                    <div className="absolute z-20 right-[-30px] bottom-0"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00315 1.82137C2.75379 1.71748 2.46638 1.77435 2.27536 1.96536C2.08434 2.15638 2.02748 2.44379 2.13137 2.69315L6.8447 14.0065C6.95136 14.2625 7.20536 14.4257 7.48253 14.4164C7.75971 14.4071 8.00216 14.2271 8.09135 13.9645L9.41996 10.0528L12.942 13.5748C13.2024 13.8352 13.6245 13.8352 13.8848 13.5748C14.1452 13.3145 14.1452 12.8924 13.8848 12.632L10.3628 9.10996L14.2745 7.78135C14.5371 7.69216 14.7171 7.44971 14.7264 7.17254C14.7357 6.89536 14.5725 6.64136 14.3165 6.53471L3.00315 1.82137ZM7.39659 11.8641L3.98473 3.67474L12.1741 7.08659L8.91903 8.19218C8.72286 8.25881 8.56881 8.41286 8.50218 8.60903L7.39659 11.8641Z" fill="#12F7D6"/>
                    </svg>
                    </div>
                </div>
                </CarouselItem>
                <CarouselItem >
                  <img src="/container.png" className="relative"/>
                  <div className="absolute  top-20 right-10 z-50  mono text-2xl border-b-4 border-white"> 
                    <Modal  details={proj2details}/>
                    <div className="absolute z-20 right-[-30px] bottom-0"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00315 1.82137C2.75379 1.71748 2.46638 1.77435 2.27536 1.96536C2.08434 2.15638 2.02748 2.44379 2.13137 2.69315L6.8447 14.0065C6.95136 14.2625 7.20536 14.4257 7.48253 14.4164C7.75971 14.4071 8.00216 14.2271 8.09135 13.9645L9.41996 10.0528L12.942 13.5748C13.2024 13.8352 13.6245 13.8352 13.8848 13.5748C14.1452 13.3145 14.1452 12.8924 13.8848 12.632L10.3628 9.10996L14.2745 7.78135C14.5371 7.69216 14.7171 7.44971 14.7264 7.17254C14.7357 6.89536 14.5725 6.64136 14.3165 6.53471L3.00315 1.82137ZM7.39659 11.8641L3.98473 3.67474L12.1741 7.08659L8.91903 8.19218C8.72286 8.25881 8.56881 8.41286 8.50218 8.60903L7.39659 11.8641Z" fill="#12F7D6"/>
                    </svg>
                    </div>
                  </div>
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