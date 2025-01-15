function HomeCompo6(){
    return(
        <div className="min-h-screen 2xl:h-screen bg-[#1A1E23] relative  flex items-center justify-center "> 
        <div className="container">
        <div className=" flex flex-col w-full gap-10 items-center justify-center xl:px-40 p-10">
            <div className="hidden xl:flex flex-col items-center justify-center">
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
            <div className="flex flex-col items-center justify-center ">
                <h1 className="text-[#12F7D6]  text-4xl md:text-6xl border-b-4 border-[#12F7D6] py-4">Contact</h1>
                <p className="mono mt-2 ">I’m currently available for freelance work</p>
            </div>
            <div className="flex w-full flex-col items-center justify-center mt-10">
            <div className="text-xl md:text-4xl px-8 text-[#12F7D6] border-4 rounded-tl-3xl py-4 p-10 rounded-br-3xl w-fit border-[#12F7D6]">
                           Send Me A Message
            </div>
           <div className="w-full flex flex-col items-center px-20 gap-8 mt-10">
           <div className="flex flex-col md:flex-row gap-10 w-full"> 
                <div className="flex flex-col w-full">
                    <label className="text-[#12F7D6]">Your name*</label>
                    <input className="bg-transparent border-b-2 border-[#12F7D6] py-2 placeholder:text-white" placeholder="Enter your name"/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-[#12F7D6]">Your email*</label>
                    <input className="bg-transparent border-b-2 border-[#12F7D6] py-2 placeholder:text-white" placeholder="Enter your email"/>
                </div>
            </div>
            <div className="flex flex-col w-full">
            <label className="text-[#12F7D6]">Your message*</label>
            <input className="bg-transparent border-b-2 border-[#12F7D6] py-2 placeholder:text-white" placeholder="Enter your needs"/>
            </div>
            <button className=" mt-6 bg-[#12F7D6] text-black font-medium px-4 py-2 flex items-center gap-3 text-xl rounded-3xl"><p>Send Message</p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7071 1.29292C22.9306 1.5164 23.0262 1.81935 22.9939 2.11081C22.9848 2.19252 22.9657 2.27332 22.9366 2.35121L15.9439 22.3304C15.8084 22.7174 15.4504 22.9825 15.0408 22.9992C14.6311 23.0159 14.2527 22.7808 14.0862 22.4062L10.2424 13.7576L1.59387 9.91384C1.21919 9.74731 0.984122 9.36894 1.00084 8.95926C1.01755 8.54959 1.28265 8.19162 1.66965 8.05617L21.6488 1.06348C21.7272 1.03414 21.8085 1.01497 21.8907 1.00598C21.9511 0.999338 22.0117 0.998262 22.0717 1.00259C22.3032 1.01913 22.5301 1.11591 22.7071 1.29292ZM18.1943 4.3915L4.71108 9.11063L10.7785 11.8073L18.1943 4.3915ZM12.1928 13.2215L19.6085 5.80571L14.8894 19.289L12.1928 13.2215Z" fill="#292F36"/>
            </svg>
            </button>
           </div>
            </div>
            </div>
        </div>
        
    </div>
    )
}

export default HomeCompo6;