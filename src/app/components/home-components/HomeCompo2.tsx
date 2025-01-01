function HomeCompo2() {
    return (
        <div className="bg-[#1A1E23] h-auto xl:h-screen overflow-hidden">
            <div className="relative w-full h-[150vh] md:h-[200vw]">
                <img
                    src="/topography.png"
                    className="absolute z-20 inset-0 w-full h-full object-cover opacity-10"
                />
               
                <div className="absolute z-40 top-0 left-0 w-full min-h-screen flex flex-col   items-center justify-center text-white px-4 py-10 xl:px-40">
                    <div className="hidden xl:flex flex-col items-center gap-10 xl:gap-20 justify-center">
                        <svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_25_645)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V28C32 36.8366 24.8366 44 16 44H14V43.8762C6.10738 42.892 0 36.1592 0 28V16ZM16 40C22.6274 40 28 34.6274 28 28V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V28C4 34.6274 9.37258 40 16 40Z" fill="#12F7D6" />
                                <path d="M17.3332 9.16675V16.5001H14.6665V9.16675H17.3332Z" fill="#12F7D6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_25_645">
                                    <rect width="32" height="44" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <img src="/Arrow 1.png" />
                    </div>
                    <div className="flex flex-col xl:flex-row gap-10 xl:gap-40 w-full">
                        <div>
                            <div className="text-3xl xl:text-6xl px-8 border-4 rounded-tl-3xl py-4 rounded-br-3xl w-fit border-[#12F7D6]">
                                About Me
                            </div>
                            <div className="bg-[#292F36] rounded-md mono p-6 mt-10">
                                <p className="text-[#98FAEC]">{'<p>'}</p>
                                <h1 className="text-[#12F7D6] text-2xl mt-6">Hello!</h1>
                                <p className="mt-6">
                                    My name is Sinan and I specialize in web development that utilizes <span className="text-[#12F7D6]">HTML</span>,
                                    <span className="text-[#12F7D6]"> CSS</span>,
                                    <span className="text-[#12F7D6]"> JS</span> and
                                    <span className="text-[#12F7D6]"> REACT </span>etc.
                                </p>
                                <p className="mt-6">
                                    I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                                </p>
                                <p className="mt-6 ">
                                    When I'm not coding, I am writing blogs, reading, or picking up some new hands-on art project like photography.
                                </p>
                                <p className="mt-6">
                                    I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                                </p>
                                <p className="mt-6 text-[#98FAEC]">{'</p>'}</p>
                            </div>
                        </div>
                        <div>
                            <img src="/Image.png" className="h-auto w-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCompo2;
