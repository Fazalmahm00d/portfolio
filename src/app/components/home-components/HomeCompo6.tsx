function HomeCompo6(){
    return(
        <div className="h-[120vh] 2xl:h-screen bg-[#1A1E23] relative"> 
        <div className=" flex flex-col w-full gap-10 items-center justify-center xl:px-40 py-10">
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
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[#12F7D6]  text-6xl border-b-4 border-[#12F7D6] py-4">Contact</h1>
                <p className="mono mt-2 ">I’m currently available for freelance work</p>
            </div>
            <div className="flex w-full flex-col items-center justify-center mt-10">
            <div className="text-4xl px-8 text-[#12F7D6] border-4 rounded-tl-3xl py-4 rounded-br-3xl w-fit border-[#12F7D6]">
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
        <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row items-center absolute py-6 bottom-0 left-0  right-0 justify-between border-t-2 border-[#43454D] w-full px-10 ">
        <div>© 2023 SinanTokmak. All rights reserved.</div>
        <div className="flex gap-6"><p>Privacy Policy</p>
        <p>Terms & Conditions</p></div>
        <div className="flex justify-between gap-10">
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.666992" width="32" height="32" rx="16" fill="#98FAEC"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1604 13.0125C15.7827 12.6896 16.491 12.5711 17.1846 12.674C17.892 12.7789 18.547 13.1085 19.0527 13.6142C19.5584 14.1199 19.888 14.7749 19.9929 15.4823C20.0958 16.1758 19.9773 16.8841 19.6544 17.5065C19.3315 18.1288 18.8205 18.6335 18.1943 18.9487C17.568 19.2639 16.8583 19.3736 16.1661 19.2622C15.4739 19.1508 14.8344 18.824 14.3386 18.3283C13.8429 17.8325 13.516 17.193 13.4046 16.5008C13.2933 15.8086 13.403 15.0989 13.7182 14.4726C14.0334 13.8463 14.5381 13.3354 15.1604 13.0125ZM16.989 13.9929C16.5729 13.9312 16.1479 14.0022 15.7745 14.196C15.4011 14.3897 15.0983 14.6963 14.9092 15.0721C14.72 15.4478 14.6542 15.8736 14.721 16.289C14.7879 16.7043 14.984 17.088 15.2814 17.3854C15.5789 17.6829 15.9626 17.879 16.3779 17.9458C16.7932 18.0127 17.2191 17.9468 17.5948 17.7577C17.9706 17.5686 18.2771 17.2658 18.4709 16.8924C18.6646 16.519 18.7357 16.094 18.674 15.6779C18.6111 15.2534 18.4133 14.8604 18.1099 14.557C17.8064 14.2536 17.4135 14.0558 16.989 13.9929Z" fill="#292F36"/>
        <path d="M20.3335 11.6667C19.9653 11.6667 19.6668 11.9652 19.6668 12.3334C19.6668 12.7016 19.9653 13.0001 20.3335 13.0001H20.3402C20.7084 13.0001 21.0068 12.7016 21.0068 12.3334C21.0068 11.9652 20.7084 11.6667 20.3402 11.6667H20.3335Z" fill="#292F36"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3335 12.6667C9.3335 10.4576 11.1244 8.66675 13.3335 8.66675H20.0002C22.2093 8.66675 24.0002 10.4576 24.0002 12.6667V19.3334C24.0002 21.5426 22.2093 23.3334 20.0002 23.3334H13.3335C11.1244 23.3334 9.3335 21.5426 9.3335 19.3334V12.6667ZM13.3335 10.0001C11.8607 10.0001 10.6668 11.194 10.6668 12.6667V19.3334C10.6668 20.8062 11.8607 22.0001 13.3335 22.0001H20.0002C21.4729 22.0001 22.6668 20.8062 22.6668 19.3334V12.6667C22.6668 11.194 21.4729 10.0001 20.0002 10.0001H13.3335Z" fill="#292F36"/>
        </svg>
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.666992" width="32" height="32" rx="16" fill="#98FAEC"/>
        <path d="M14.9951 10.4531L14.6045 10.5C14.6045 10.5 12.8525 10.6914 11.5732 11.7188H11.5576L11.542 11.7344C11.2549 11.998 11.1299 12.3223 10.9326 12.7969C10.7354 13.2715 10.5244 13.877 10.3389 14.5469C9.96777 15.8887 9.66699 17.5137 9.66699 19V19.125L9.72949 19.25C10.1924 20.0625 11.0146 20.5801 11.7764 20.9375C12.5381 21.2949 13.1963 21.4844 13.6514 21.5L13.9482 21.5156L14.1045 21.25L14.6514 20.2812C15.2314 20.4121 15.8994 20.5 16.667 20.5C17.4346 20.5 18.1025 20.4121 18.6826 20.2812L19.2295 21.25L19.3857 21.5156L19.6826 21.5C20.1377 21.4844 20.7959 21.2949 21.5576 20.9375C22.3193 20.5801 23.1416 20.0625 23.6045 19.25L23.667 19.125V19C23.667 17.5137 23.3662 15.8887 22.9951 14.5469C22.8096 13.877 22.5986 13.2715 22.4014 12.7969C22.2041 12.3223 22.0791 11.998 21.792 11.7344L21.7764 11.7188H21.7607C20.4814 10.6914 18.7295 10.5 18.7295 10.5L18.3389 10.4531L18.1982 10.8125C18.1982 10.8125 18.0537 11.1777 17.9639 11.5938C17.3975 11.5176 16.9346 11.5 16.667 11.5C16.3994 11.5 15.9365 11.5176 15.3701 11.5938C15.2803 11.1777 15.1357 10.8125 15.1357 10.8125L14.9951 10.4531ZM14.3076 11.5938C14.3291 11.6641 14.3506 11.7246 14.3701 11.7812C13.7236 11.9414 13.0342 12.1855 12.4014 12.5781L12.9326 13.4219C14.2295 12.6172 16.0928 12.5 16.667 12.5C17.2412 12.5 19.1045 12.6172 20.4014 13.4219L20.9326 12.5781C20.2998 12.1855 19.6104 11.9414 18.9639 11.7812C18.9834 11.7246 19.0049 11.6641 19.0264 11.5938C19.4932 11.6875 20.3838 11.9023 21.1201 12.4844C21.1162 12.4863 21.3076 12.7754 21.4795 13.1875C21.6553 13.6113 21.8506 14.1758 22.0264 14.8125C22.3643 16.0332 22.6299 17.5195 22.6514 18.8281C22.3369 19.3086 21.7529 19.7422 21.1357 20.0312C20.5967 20.2832 20.1709 20.375 19.917 20.4219L19.667 20C19.8154 19.9453 19.9619 19.8848 20.0889 19.8281C20.8584 19.4902 21.2764 19.125 21.2764 19.125L20.6201 18.375C20.6201 18.375 20.3389 18.6328 19.6826 18.9219C19.0264 19.2109 18.0244 19.5 16.667 19.5C15.3096 19.5 14.3076 19.2109 13.6514 18.9219C12.9951 18.6328 12.7139 18.375 12.7139 18.375L12.0576 19.125C12.0576 19.125 12.4756 19.4902 13.2451 19.8281C13.3721 19.8848 13.5186 19.9453 13.667 20L13.417 20.4219C13.1631 20.375 12.7373 20.2832 12.1982 20.0312C11.5811 19.7422 10.9971 19.3086 10.6826 18.8281C10.7041 17.5195 10.9697 16.0332 11.3076 14.8125C11.4834 14.1758 11.6787 13.6113 11.8545 13.1875C12.0264 12.7754 12.2178 12.4863 12.2139 12.4844C12.9502 11.9023 13.8408 11.6875 14.3076 11.5938ZM14.917 15C14.5303 15 14.1885 15.2207 13.9795 15.5C13.7705 15.7793 13.667 16.123 13.667 16.5C13.667 16.877 13.7705 17.2207 13.9795 17.5C14.1885 17.7793 14.5303 18 14.917 18C15.3037 18 15.6455 17.7793 15.8545 17.5C16.0635 17.2207 16.167 16.877 16.167 16.5C16.167 16.123 16.0635 15.7793 15.8545 15.5C15.6455 15.2207 15.3037 15 14.917 15ZM18.417 15C18.0303 15 17.6885 15.2207 17.4795 15.5C17.2705 15.7793 17.167 16.123 17.167 16.5C17.167 16.877 17.2705 17.2207 17.4795 17.5C17.6885 17.7793 18.0303 18 18.417 18C18.8037 18 19.1455 17.7793 19.3545 17.5C19.5635 17.2207 19.667 16.877 19.667 16.5C19.667 16.123 19.5635 15.7793 19.3545 15.5C19.1455 15.2207 18.8037 15 18.417 15ZM14.917 16C14.9443 16 14.9795 16.0098 15.042 16.0938C15.1045 16.1777 15.167 16.3242 15.167 16.5C15.167 16.6758 15.1045 16.8223 15.042 16.9062C14.9795 16.9902 14.9443 17 14.917 17C14.8896 17 14.8545 16.9902 14.792 16.9062C14.7295 16.8223 14.667 16.6758 14.667 16.5C14.667 16.3242 14.7295 16.1777 14.792 16.0938C14.8545 16.0098 14.8896 16 14.917 16ZM18.417 16C18.4443 16 18.4795 16.0098 18.542 16.0938C18.6045 16.1777 18.667 16.3242 18.667 16.5C18.667 16.6758 18.6045 16.8223 18.542 16.9062C18.4795 16.9902 18.4443 17 18.417 17C18.3896 17 18.3545 16.9902 18.292 16.9062C18.2295 16.8223 18.167 16.6758 18.167 16.5C18.167 16.3242 18.2295 16.1777 18.292 16.0938C18.3545 16.0098 18.3896 16 18.417 16Z" fill="#292F36"/>
        </svg>
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.666992" width="32" height="32" rx="16" fill="#98FAEC"/>
        <path d="M16.6672 9.4978C15.0842 9.49787 13.5528 10.0612 12.3471 11.087C11.1415 12.1129 10.3402 13.5342 10.0866 15.0968C9.83302 16.6594 10.1437 18.2612 10.9631 19.6156C11.7825 20.9701 13.0571 21.9888 14.5589 22.4895C14.8922 22.5478 15.0172 22.3478 15.0172 22.1728C15.0172 22.0145 15.0088 21.4895 15.0088 20.9311C13.3338 21.2395 12.9005 20.5228 12.7672 20.1478C12.6192 19.7831 12.3847 19.4599 12.0838 19.2061C11.8505 19.0811 11.5172 18.7728 12.0755 18.7645C12.2887 18.7876 12.4932 18.8618 12.6716 18.9807C12.85 19.0997 12.9971 19.2599 13.1005 19.4478C13.1917 19.6116 13.3143 19.7558 13.4613 19.8721C13.6083 19.9885 13.7768 20.0746 13.9572 20.1257C14.1376 20.1768 14.3262 20.1918 14.5124 20.1699C14.6986 20.1479 14.8786 20.0894 15.0422 19.9978C15.071 19.6589 15.2221 19.342 15.4672 19.1062C13.9838 18.9395 12.4338 18.3645 12.4338 15.8145C12.4245 15.1519 12.669 14.5109 13.1172 14.0228C12.9134 13.447 12.9372 12.815 13.1838 12.2562C13.1838 12.2562 13.7422 12.0811 15.0172 12.9395C16.108 12.6395 17.2596 12.6395 18.3505 12.9395C19.6255 12.0728 20.1838 12.2562 20.1838 12.2562C20.4305 12.815 20.4544 13.447 20.2505 14.0228C20.7001 14.51 20.9448 15.1516 20.9338 15.8145C20.9338 18.3728 19.3755 18.9395 17.8922 19.1062C18.0513 19.2674 18.1738 19.461 18.2515 19.6738C18.3291 19.8866 18.36 20.1137 18.3422 20.3395C18.3422 21.2312 18.3338 21.9478 18.3338 22.1728C18.3338 22.3478 18.4588 22.5562 18.7922 22.4895C20.2913 21.9847 21.5622 20.9636 22.3781 19.6085C23.194 18.2534 23.5018 16.6524 23.2464 15.0913C22.9911 13.5302 22.1893 12.1107 20.9842 11.0861C19.779 10.0616 18.249 9.49863 16.6672 9.4978Z" fill="#292F36"/>
        </svg>

        </div>
        <div>
            <p className="flex gap-2">Design By <span className="text-[#12F7D6] ">JohannLeon</span></p>
        </div>
    </div>
    </div>
    )
}

export default HomeCompo6;