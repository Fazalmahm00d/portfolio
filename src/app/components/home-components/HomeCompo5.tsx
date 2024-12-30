function HomeCompo5(){
    return(
        <div className="bg-[#292F36] h-[170vh] 2xl:h-screen flex flex-col justify-center items-center gap-10 xl:px-40">
            <div className=" hidden xl:flex flex-col items-center justify-center">
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
                <h1 className="text-[#12F7D6]  text-6xl border-b-4 border-[#12F7D6] py-4">Blogs</h1>
                <p className="mono mt-2 ">My thoughts on technology and business, welcome to subscribes</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-20 border-y-4 border-white p-20">
                <div>
                    <img src="/Image2.png" className="w-60"/>
                </div>
                <div className="flex flex-col gap-6 xl:pr-40">
                    <p className="text-4xl text-[#12F7D6]">What does it take to become a web developer?</p>
                    <p className=" tracking-widest leading-7">Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…</p>
                    <div className="text-[#12F7D6] flex gap-2">
                        <p className="border-b-2 border-white">Read More</p>
                        <p className="">{'>>'}</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-[#43454D] rounded-xl p-2">Web Developer</div>
                    <div className="flex gap-2 items-center"><span className="font-bold">Author</span> Sinan</div>
                    <div className="flex gap-2 items-center"><span className="font-bold">Date</span> 10.Oct 2023</div>
                    <div className="flex gap-2 items-center"><span className="font-bold">Read</span> 1 Min</div>
                </div>
                </div>
                
               
            </div>
            <div className="flex gap-6">
                    <button className="text-black rounded-3xl bg-[#12F7D6] px-4 py-2">View More</button>
                    <button  className="text-white border-4 rounded-3xl border-[#12F7D6] px-4 py-2">Subscribe</button>
                </div>
            
        </div>
    )
}   

export default HomeCompo5