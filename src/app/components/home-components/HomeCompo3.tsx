import GlowingCard from "../animata/card/glowing-card"

function HomeCompo3(){
    return(
            <div className=" inset-0 min-h-screen 2xl:h-screen  opacity-80 md:px-40 relative flex flex-col gap-10 items-center justify-center bg-[#292F36] bg-opacity-70">
                <div className="container">
            <div className="hidden 2xl:flex  flex-col items-center justify-center">
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
                <h1 className="text-[#12F7D6]  text-6xl border-b-4 border-[#12F7D6] py-4">Skills</h1>
                <p className="mono mt-2 ">I am striving to never stop learning and improving</p>
            </div>
            <div className="flex flex-col gap-20 justify-center items-center">
            <div className="flex flex-col md:flex-row gap-10 md:gap-40 mono">

                <GlowingCard ><div className="relative bg-[#98FAEC] flex flex-col z-50 border-l-8 rounded-3xl border-[#28A9E0] items-center text-black p-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3335 24H26.6668C28.876 24 30.6668 22.2091 30.6668 20V6.66663C30.6668 4.45749 28.876 2.66663 26.6668 2.66663H5.3335C3.12436 2.66663 1.3335 4.45749 1.3335 6.66663V20C1.3335 22.2091 3.12436 24 5.3335 24H14.6668V26.6666H10.6668C9.93045 26.6666 9.3335 27.2636 9.3335 28C9.3335 28.7363 9.93045 29.3333 10.6668 29.3333H21.3335C22.0699 29.3333 22.6668 28.7363 22.6668 28C22.6668 27.2636 22.0699 26.6666 21.3335 26.6666H17.3335V24ZM5.3335 5.33329C4.59712 5.33329 4.00016 5.93025 4.00016 6.66663V20C4.00016 20.7363 4.59712 21.3333 5.3335 21.3333H26.6668C27.4032 21.3333 28.0002 20.7363 28.0002 20V6.66663C28.0002 5.93025 27.4032 5.33329 26.6668 5.33329H5.3335Z" fill="#292F36"/>
                    </svg>
                    <h1 className="text-2xl">Web development</h1>
                    <p>HTML·CSS·JS·REACT</p>
                </div></GlowingCard>
                
                <GlowingCard><div className="relative z-50 bg-[#98FAEC] flex flex-col border-l-8 rounded-3xl border-[#28A9E0] items-center text-black p-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0002 22.6667C15.2638 22.6667 14.6668 23.2637 14.6668 24C14.6668 24.7364 15.2638 25.3334 16.0002 25.3334H16.0135C16.7499 25.3334 17.3468 24.7364 17.3468 24C17.3468 23.2637 16.7499 22.6667 16.0135 22.6667H16.0002Z" fill="#292F36"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3335 1.33337C7.12436 1.33337 5.3335 3.12423 5.3335 5.33337V26.6667C5.3335 28.8758 7.12436 30.6667 9.3335 30.6667H22.6668C24.876 30.6667 26.6668 28.8758 26.6668 26.6667V5.33337C26.6668 3.12423 24.876 1.33337 22.6668 1.33337H9.3335ZM8.00016 5.33337C8.00016 4.59699 8.59712 4.00004 9.3335 4.00004H22.6668C23.4032 4.00004 24.0002 4.59699 24.0002 5.33337V26.6667C24.0002 27.4031 23.4032 28 22.6668 28H9.3335C8.59712 28 8.00016 27.4031 8.00016 26.6667V5.33337Z" fill="#292F36"/>
                </svg>
                <h1 className="text-2xl">App Development</h1>
                <p>iOS·Android</p>
                </div></GlowingCard>
            </div>
            <div className="grid grid-cols-2 gap-10 2xl:flex 2xl:gap-20">
            <div className="flex flex-col items-center gap-5">
            <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="144" height="144" rx="72" fill="#E54F26"/>
<path d="M50.4375 48L50.625 50.1875L54.125 89.75L54.25 91.125L55.5625 91.5L71.4375 95.9375L71.9375 96.0625L72.5 95.9375L88.375 91.5625L89.6875 91.1875L89.8125 89.8125L93.375 50.1875L93.5625 48.0625H91.375L52.625 48H50.4375ZM54.8125 52L89.1875 52.0625L85.9375 88.0625L72 91.9375L58 88.0625L54.8125 52ZM59.625 58L60.9375 72.9375H78.0625L77.5 79.375L72 80.875H71.9375L66.4375 79.375L66.125 75.25H61.125L61.8125 83.1875L71.9375 86H72L82.125 83.1875L83.5 68H65.4375L65 62.9375H83.9375L84.375 58H59.625Z" fill="white"/>
</svg>
<p className="text-[#E54F26] text-3xl">HTML</p>
            </div>
            <div className="flex flex-col items-center gap-5">
            <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="144" height="144" rx="72" fill="#0C73B8"/>
<path d="M52 48L56 90L72 96L88 90L92 48H52ZM58.6641 54H85.3047L84.7812 60L73.3906 66H78.2422H84H84.2461L83.2227 78.0156L83.2617 78L82.7109 84L72 88L61.2695 84L60.6094 76H66.6523L66.9648 80.0664L72 81.8086L77.043 80.1016L77.7344 72H60.2617L59.7461 66L71.5664 60H59.2188L58.6641 54Z" fill="white"/>
</svg>
<p className="text-[#0C73B8] text-3xl">CSS</p>
            </div>
        <div className="flex flex-col items-center gap-5">
        <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="144" height="144" rx="72" fill="#E7A020"/>
<path d="M71.9883 46C71.2583 46 70.5284 46.1791 69.8984 46.5391L50.0781 57.9805C48.7981 58.7205 48 60.1216 48 61.6016V82.3594C48 83.8594 48.7981 85.2405 50.0781 85.9805L55.2812 88.9805C57.8013 90.2205 58.6998 90.2188 59.8398 90.2188C63.5798 90.2188 65.7188 87.9591 65.7188 84.0391V62.6211C65.7188 62.3011 65.4606 62.0391 65.1406 62.0391H62.6406C62.3006 62.0391 62.0586 62.3011 62.0586 62.6211V84.0195C62.0586 85.7795 60.2408 87.4991 57.3008 86.0391L51.8594 82.8984C51.6594 82.7984 51.5391 82.5794 51.5391 82.3594V61.6211C51.5391 61.3811 51.6594 61.1786 51.8594 61.0586L71.6797 49.6211C71.8597 49.5011 72.1008 49.5011 72.3008 49.6211L92.1211 61.0586C92.3211 61.1786 92.4414 61.3816 92.4414 61.6016V82.3594C92.4414 82.5794 92.3206 82.7984 92.1406 82.8984L72.3008 94.3594C72.1208 94.4594 71.8597 94.4594 71.6797 94.3594L66.5781 91.3398C66.4381 91.2398 66.2416 91.2208 66.1016 91.3008C64.6816 92.1008 64.4216 92.2002 63.1016 92.6602C62.7816 92.7602 62.2812 92.9595 63.2812 93.5195L69.8984 97.4414C70.5384 97.8014 71.2605 98 71.9805 98C72.7205 98 73.4381 97.8014 74.0781 97.4414L93.9219 85.9805C95.2019 85.2405 96 83.8594 96 82.3594V61.6211C96 60.1211 95.2019 58.74 93.9219 58L74.0781 46.5391C73.4481 46.1791 72.7183 46 71.9883 46ZM77.3203 62.0117C71.6603 62.0117 68.2812 64.4102 68.2812 68.4102C68.2812 72.7502 71.6381 73.9483 77.0781 74.4883C83.5781 75.1283 84.0781 76.0911 84.0781 77.3711C84.0781 79.5711 82.3011 80.5117 78.1211 80.5117C72.8611 80.5117 71.7003 79.1898 71.3203 76.5898C71.2803 76.3098 71.0417 76.1094 70.7617 76.1094H68.1797C67.8597 76.1094 67.6211 76.3719 67.6211 76.6719C67.6211 80.0119 69.4411 83.9883 78.1211 83.9883C84.4011 83.9883 88 81.5114 88 77.1914C88 72.9114 85.0995 71.7692 79.0195 70.9492C72.8395 70.1492 72.2188 69.7291 72.2188 68.2891C72.2188 67.0891 72.7603 65.5117 77.3203 65.5117C81.3803 65.5117 82.8995 66.3889 83.5195 69.1289C83.5795 69.3889 83.7981 69.5898 84.0781 69.5898H86.6602C86.8202 69.5898 86.9581 69.5106 87.0781 69.3906C87.1781 69.2906 87.2388 69.1292 87.2188 68.9492C86.8187 64.2292 83.6803 62.0117 77.3203 62.0117Z" fill="white"/>
</svg>
<p className="text-[#E7A020] text-3xl ">JS</p>
        </div>
        <div className="flex flex-col items-center gap-5">
        <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="144" height="144" rx="72" fill="#28A9E0"/>
<path d="M62.8086 46.7187C61.118 46.6066 59.4564 46.9091 58 47.75C56.0581 48.8711 54.7649 50.7849 54.0703 52.9883C53.3757 55.1916 53.2152 57.7309 53.4688 60.5039C53.4944 60.7848 53.5438 61.0775 53.5781 61.3633C53.313 61.4766 53.0339 61.5808 52.7773 61.6992C50.2491 62.8661 48.1312 64.2733 46.5703 65.9765C45.0094 67.6798 44 69.7576 44 72C44 74.2423 45.0094 76.3202 46.5703 78.0234C48.1312 79.7266 50.2491 81.1339 52.7773 82.3008C53.0339 82.4192 53.313 82.5233 53.5781 82.6367C53.5438 82.9224 53.4944 83.2152 53.4688 83.4961C53.2152 86.2691 53.3757 88.8083 54.0703 91.0117C54.7649 93.2151 56.0581 95.1288 58 96.25C59.9419 97.3711 62.2445 97.5353 64.5 97.0351C66.7555 96.535 69.0339 95.4029 71.3086 93.7969C71.5389 93.6343 71.7698 93.4459 72 93.2734C72.2302 93.4459 72.4611 93.6343 72.6914 93.7969C74.9661 95.4029 77.2445 96.535 79.5 97.0351C81.7555 97.5353 84.0581 97.3711 86 96.25C87.9419 95.1288 89.2351 93.2151 89.9297 91.0117C90.6243 88.8083 90.7848 86.2691 90.5312 83.4961C90.5056 83.2152 90.4562 82.9224 90.4219 82.6367C90.687 82.5233 90.9661 82.4192 91.2227 82.3008C93.7509 81.1339 95.8688 79.7266 97.4297 78.0234C98.9906 76.3202 100 74.2423 100 72C100 69.7576 98.9906 67.6798 97.4297 65.9765C95.8688 64.2733 93.7509 62.8661 91.2227 61.6992C90.9661 61.5808 90.687 61.4766 90.4219 61.3633C90.4562 61.0775 90.5056 60.7848 90.5312 60.5039C90.7848 57.7309 90.6243 55.1916 89.9297 52.9883C89.2351 50.7849 87.9419 48.8711 86 47.75C84.0581 46.6288 81.7555 46.4647 79.5 46.9648C77.2445 47.465 74.9661 48.597 72.6914 50.2031C72.4611 50.3657 72.2302 50.5541 72 50.7265C71.7698 50.5541 71.5389 50.3657 71.3086 50.2031C69.0339 48.597 66.7555 47.465 64.5 46.9648C63.9361 46.8398 63.3721 46.7561 62.8086 46.7187ZM62.5469 50.7031C62.8877 50.7288 63.25 50.7853 63.6367 50.8711C65.1481 51.2062 66.9581 52.0545 68.8672 53.3828C67.2772 54.8911 65.7124 56.6071 64.2188 58.5273C61.8117 58.8607 59.5444 59.3544 57.4453 59.9765C57.2498 57.66 57.4175 55.6674 57.8828 54.1914C58.3592 52.6803 59.0722 51.7505 60 51.2148C60.6959 50.8131 61.5244 50.6261 62.5469 50.7031ZM81.4531 50.7031C82.4756 50.6261 83.3041 50.8131 84 51.2148C84.9278 51.7505 85.6408 52.6803 86.1172 54.1914C86.5825 55.6674 86.7502 57.66 86.5547 59.9765C84.4556 59.3544 82.1883 58.8607 79.7812 58.5273C78.2876 56.6071 76.7228 54.8911 75.1328 53.3828C77.0419 52.0545 78.8519 51.2062 80.3633 50.8711C80.75 50.7853 81.1123 50.7288 81.4531 50.7031ZM72 55.9179C72.703 56.5679 73.4047 57.2907 74.1055 58.0469C73.408 58.0222 72.711 58 72 58C71.289 58 70.592 58.0222 69.8945 58.0469C70.5953 57.2907 71.297 56.5679 72 55.9179ZM72 62C73.9291 62 75.7988 62.1134 77.5977 62.3047C78.6627 63.7669 79.6956 65.3294 80.6602 67C81.6248 68.6707 82.4615 70.3464 83.1953 72C82.4615 73.6536 81.6248 75.3292 80.6602 77C79.6956 78.6706 78.6627 80.233 77.5977 81.6953C75.7988 81.8865 73.9291 82 72 82C70.0709 82 68.2012 81.8865 66.4023 81.6953C65.3373 80.233 64.3044 78.6706 63.3398 77C62.3752 75.3292 61.5385 73.6536 60.8047 72C61.5385 70.3464 62.3752 68.6707 63.3398 67C64.3044 65.3294 65.3373 63.7669 66.4023 62.3047C68.2012 62.1134 70.0709 62 72 62ZM60.9688 63.1992C60.5987 63.7908 60.2305 64.3843 59.875 65C59.5195 65.6157 59.1906 66.2313 58.8633 66.8476C58.5592 65.8641 58.2854 64.8934 58.0742 63.9609C58.9882 63.6772 59.9639 63.4279 60.9688 63.1992ZM83.0312 63.1992C84.0361 63.4279 85.0118 63.6772 85.9258 63.9609C85.7146 64.8934 85.4408 65.8641 85.1367 66.8476C84.8094 66.2313 84.4805 65.6157 84.125 65C83.7695 64.3843 83.4013 63.7908 83.0312 63.1992ZM54.3086 65.4062C54.8197 67.537 55.5255 69.7468 56.4414 72C55.5255 74.2532 54.8197 76.463 54.3086 78.5937C52.2056 77.605 50.5648 76.4609 49.5195 75.3203C48.4491 74.1522 48 73.0714 48 72C48 70.9286 48.4491 69.8478 49.5195 68.6797C50.5648 67.5391 52.2056 66.395 54.3086 65.4062ZM89.6914 65.4062C91.7944 66.395 93.4352 67.5391 94.4805 68.6797C95.5509 69.8478 96 70.9286 96 72C96 73.0714 95.5509 74.1522 94.4805 75.3203C93.4352 76.4609 91.7944 77.605 89.6914 78.5937C89.1803 76.463 88.4745 74.2532 87.5586 72C88.4745 69.7468 89.1803 67.537 89.6914 65.4062ZM72 66C68.71 66 66 68.71 66 72C66 75.29 68.71 78 72 78C75.29 78 78 75.29 78 72C78 68.71 75.29 66 72 66ZM72 70C73.1283 70 74 70.8717 74 72C74 73.1282 73.1283 74 72 74C70.8717 74 70 73.1282 70 72C70 70.8717 70.8717 70 72 70ZM58.8633 77.1523C59.1906 77.7686 59.5195 78.3843 59.875 79C60.2305 79.6157 60.5987 80.2091 60.9688 80.8008C59.9639 80.572 58.9882 80.3228 58.0742 80.039C58.2854 79.1066 58.5592 78.1358 58.8633 77.1523ZM85.1367 77.1523C85.4408 78.1358 85.7146 79.1066 85.9258 80.039C85.0118 80.3228 84.0361 80.572 83.0312 80.8008C83.4013 80.2091 83.7695 79.6157 84.125 79C84.4805 78.3843 84.8094 77.7686 85.1367 77.1523ZM57.4453 84.0234C59.5444 84.6456 61.8117 85.1392 64.2188 85.4726C65.7124 87.3929 67.2772 89.1088 68.8672 90.6172C66.9581 91.9454 65.1481 92.7937 63.6367 93.1289C62.0899 93.4719 60.9278 93.3208 60 92.7851C59.0722 92.2494 58.3592 91.3197 57.8828 89.8086C57.4175 88.3326 57.2498 86.3399 57.4453 84.0234ZM86.5547 84.0234C86.7502 86.3399 86.5825 88.3326 86.1172 89.8086C85.6408 91.3197 84.9278 92.2494 84 92.7851C83.0722 93.3208 81.9101 93.4719 80.3633 93.1289C78.8519 92.7937 77.0419 91.9454 75.1328 90.6172C76.7228 89.1088 78.2876 87.3929 79.7812 85.4726C82.1883 85.1392 84.4556 84.6456 86.5547 84.0234ZM69.8945 85.9531C70.592 85.9778 71.289 86 72 86C72.711 86 73.408 85.9778 74.1055 85.9531C73.4047 86.7093 72.703 87.4321 72 88.082C71.297 87.4321 70.5953 86.7093 69.8945 85.9531Z" fill="white"/>
</svg>
<p className="text-[#28A9E0] text-3xl" >REACT</p>
        </div>

            </div>
            </div>
            </div>
            </div>
           
    )
}

export default HomeCompo3