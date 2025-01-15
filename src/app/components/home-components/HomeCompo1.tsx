"use client"
import { Copy, Home, Settings, Share2, SquarePen, Trash, User } from 'lucide-react';
import Image from 'next/image';

import Speeddial from '../animata/fabs/speed-dial';
import StaggeredLetter from '../animata/text/staggered-letter';
function HomeCompo1() {
  const handleMouseMove = (e:any) => {
    const container = document.getElementById("container"); // Fixed to get the container by ID
    
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    }
  };

    return(
        <div 
        className=" relative group bg-[#292F36] flex justify-center items-center gap-10 h-auto 2xl:h-screen w-full   md:px-40 " >
          <div
            className="absolute   inset-0  opacity-0 group-hover:opacity-100 rounded-lg"
            style={{
              background:
                "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.2), transparent 40%)",
            }}
          ></div>
            <div className='flex py-10 h-fit hidden xl:block'>
              <Speeddial
                  actionButtons={[
                    {
                      action: () => {},
                      icon: <Copy />,
                      key: 'copy',
                      label: 'Copy'
                    },
                    {
                      action: () => {},
                      icon: <SquarePen />,
                      key: 'edit',
                      label: 'Edit'
                    },
                    {
                      action: () => {},
                      icon: <Share2 />,
                      key: 'share',
                      label: 'Share'
                    },
                    {
                      action: () => {},
                      icon: <Trash />,
                      key: 'delete',
                      label: 'Delete'
                    }
                  ]}
                  direction="down"
                  
                /></div>
            <div className='container'>
            <h1 className="hidden 2xl:block text-9xl text-[#98FAEC] text-center mb-8">Developer</h1>
            <div className='flex flex-col items-center 2xl:flex-row'>
            <div className="bg-[#292F36] mono border-8 rounded-tl-[50%] rounded-br-[50%] h-full text-white w-fit px-12  py-12 2xl:px-16 2xl:py-16 flex flex-col items-center"> 
            <Image 
            className='w-32 h-32 rounded-full object-center border-8 border-[#98FAEC]'
            src="/profile.png" 
            alt="My Image" 
            width={300} 
            height={200} 
            />
            <h2 className="text-2xl font-bold mb-2">Fazal</h2>
            {/* <p className="text-sm mb-4">Full-stack Developer</p> */}
             
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.583575 3.48988C0.58348 3.49564 0.583471 3.50139 0.583546 3.50715V10.5C0.583546 11.4638 1.36971 12.25 2.33355 12.25H11.6669C12.6307 12.25 13.4169 11.4638 13.4169 10.5V3.50721C13.417 3.50141 13.4169 3.4956 13.4169 3.4898C13.4113 2.53063 12.6273 1.75 11.6669 1.75H2.33355C1.37309 1.75 0.589053 2.53067 0.583575 3.48988ZM1.81238 3.2398C1.90885 3.04904 2.10724 2.91667 2.33355 2.91667H11.6669C11.8932 2.91667 12.0916 3.04904 12.188 3.2398L7.00021 6.87128L1.81238 3.2398ZM12.2502 4.62038V10.5C12.2502 10.8195 11.9864 11.0833 11.6669 11.0833H2.33355C2.01405 11.0833 1.75021 10.8195 1.75021 10.5V4.62038L6.66569 8.06122C6.86655 8.20182 7.13388 8.20182 7.33473 8.06122L12.2502 4.62038Z" fill="#12F7D6"/>
              </svg>

                        <span>fazalmah000@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99984 3.5C5.71117 3.5 4.6665 4.54467 4.6665 5.83333C4.6665 7.122 5.71117 8.16667 6.99984 8.16667C8.2885 8.16667 9.33317 7.122 9.33317 5.83333C9.33317 4.54467 8.2885 3.5 6.99984 3.5ZM5.83317 5.83333C5.83317 5.189 6.3555 4.66667 6.99984 4.66667C7.64417 4.66667 8.1665 5.189 8.1665 5.83333C8.1665 6.47767 7.64417 7 6.99984 7C6.3555 7 5.83317 6.47767 5.83317 5.83333Z" fill="#12F7D6"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67595 13.9018C6.67611 13.9019 6.67626 13.902 6.99984 13.4167L6.67595 13.9018C6.87189 14.0324 7.12747 14.0327 7.32341 13.902L6.99984 13.4167C7.32341 13.902 7.32324 13.9021 7.32341 13.902L7.3254 13.9007L7.32928 13.8981L7.34265 13.8891C7.35401 13.8813 7.37021 13.8703 7.39093 13.8559C7.43236 13.8272 7.4919 13.7854 7.56696 13.7312C7.71702 13.6228 7.92946 13.4646 8.18352 13.2623C8.69073 12.8584 9.36853 12.275 10.0483 11.5574C11.384 10.1475 12.8332 8.10947 12.8332 5.83333C12.8332 4.28624 12.2186 2.80251 11.1246 1.70854C10.0307 0.614581 8.54693 0 6.99984 0C5.45274 0 3.96901 0.614581 2.87505 1.70854C1.78109 2.80251 1.1665 4.28624 1.1665 5.83333C1.1665 8.10947 2.61566 10.1475 3.95136 11.5574C4.63115 12.275 5.30895 12.8584 5.81615 13.2623C6.07021 13.4646 6.28266 13.6228 6.43271 13.7312C6.50777 13.7854 6.56731 13.8272 6.60875 13.8559C6.62946 13.8703 6.64566 13.8813 6.65702 13.8891L6.67039 13.8981L6.67428 13.9007L6.67595 13.9018ZM3.70001 2.5335C4.57518 1.65833 5.76216 1.16667 6.99984 1.16667C8.23751 1.16667 9.4245 1.65833 10.2997 2.5335C11.1748 3.40867 11.6665 4.59566 11.6665 5.83333C11.6665 7.64053 10.4907 9.39415 9.20136 10.7551C8.56865 11.4229 7.93395 11.9697 7.45678 12.3497C7.27919 12.4911 7.12407 12.6089 6.99984 12.7007C6.8756 12.6089 6.72049 12.4911 6.5429 12.3497C6.06573 11.9697 5.43103 11.4229 4.79831 10.7551C3.50902 9.39415 2.33317 7.64053 2.33317 5.83333C2.33317 4.59566 2.82484 3.40867 3.70001 2.5335Z" fill="#12F7D6"/>
              </svg>

                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.8335 1.16675C5.36937 1.16675 4.92425 1.35112 4.59606 1.67931C4.26787 2.0075 4.0835 2.45262 4.0835 2.91675V3.50008H2.3335C1.367 3.50008 0.583496 4.28358 0.583496 5.25008V11.0834C0.583496 12.0499 1.367 12.8334 2.3335 12.8334H11.6668C12.6333 12.8334 13.4168 12.0499 13.4168 11.0834V5.25008C13.4168 4.28358 12.6333 3.50008 11.6668 3.50008H9.91683V2.91675C9.91683 2.45262 9.73246 2.0075 9.40427 1.67931C9.07608 1.35112 8.63096 1.16675 8.16683 1.16675H5.8335ZM8.75016 3.50008V2.91675C8.75016 2.76204 8.68871 2.61367 8.57931 2.50427C8.46991 2.39487 8.32154 2.33341 8.16683 2.33341H5.8335C5.67879 2.33341 5.53041 2.39487 5.42102 2.50427C5.31162 2.61367 5.25016 2.76204 5.25016 2.91675V3.50008H8.75016ZM5.25016 4.66675H8.75016V11.6667H5.25016V4.66675ZM4.0835 4.66675H2.3335C2.01133 4.66675 1.75016 4.92792 1.75016 5.25008V11.0834C1.75016 11.4056 2.01133 11.6667 2.3335 11.6667H4.0835V4.66675ZM9.91683 11.6667V4.66675H11.6668C11.989 4.66675 12.2502 4.92792 12.2502 5.25008V11.0834C12.2502 11.4056 11.989 11.6667 11.6668 11.6667H9.91683Z" fill="#12F7D6"/>
        </svg>

                  <span>Full-time / Freelancer</span>
                </div>
                <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_907)">
                    <path d="M9.91414 0.622203C8.99645 0.614228 8.11234 0.967009 7.45223 1.60456L7.44621 1.61047L6.44287 2.60797C6.2144 2.83511 6.21333 3.20445 6.44047 3.43292C6.66761 3.66139 7.03695 3.66247 7.26542 3.43533L8.2656 2.44096C8.70537 2.01767 9.29354 1.78352 9.904 1.78883C10.5158 1.79414 11.101 2.03954 11.5336 2.47215C11.9663 2.90477 12.2117 3.49 12.217 4.1018C12.2223 4.71199 11.9883 5.29992 11.5654 5.73962L9.81917 7.48584C9.58262 7.72247 9.29788 7.90553 8.98439 8.02247C8.6709 8.13941 8.33593 8.18757 8.0022 8.16367C7.66846 8.13976 7.34377 8.04437 7.05015 7.88395C6.75653 7.72353 6.50084 7.50184 6.30043 7.23391C6.10746 6.97593 5.74189 6.92323 5.48391 7.1162C5.22593 7.30917 5.17323 7.67474 5.3662 7.93272C5.66682 8.33461 6.05035 8.66715 6.49079 8.90778C6.93122 9.14841 7.41826 9.2915 7.91886 9.32735C8.41946 9.3632 8.92191 9.29097 9.39214 9.11556C9.86237 8.94016 10.2894 8.66567 10.6442 8.31072L12.3941 6.56079L12.4012 6.55356C13.0388 5.89345 13.3916 5.00935 13.3836 4.09166C13.3756 3.17397 13.0075 2.29613 12.3586 1.6472C11.7097 0.998268 10.8318 0.630177 9.91414 0.622203Z" fill="#12F7D6"/>
                    <path d="M6.08108 4.6726C5.58048 4.63675 5.07802 4.70898 4.60779 4.88439C4.13759 5.05979 3.71061 5.33425 3.35581 5.68916L1.60581 7.43916L1.5987 7.44639C0.961149 8.1065 0.608369 8.99061 0.616343 9.9083C0.624318 10.826 0.992409 11.7038 1.64134 12.3528C2.29027 13.0017 3.16811 13.3698 4.0858 13.3778C5.00349 13.3857 5.88759 13.0329 6.5477 12.3954L6.55493 12.3883L7.55243 11.3908C7.78024 11.163 7.78024 10.7936 7.55243 10.5658C7.32463 10.338 6.95528 10.338 6.72748 10.5658L5.73375 11.5596C5.29405 11.9825 4.70613 12.2164 4.09594 12.2111C3.48414 12.2058 2.89891 11.9604 2.4663 11.5278C2.03368 11.0952 1.78828 10.51 1.78297 9.89816C1.77766 9.28796 2.01161 8.70004 2.43455 8.26034L4.18077 6.51412C4.41731 6.27749 4.70206 6.09442 5.01555 5.97748C5.32903 5.86054 5.664 5.81239 5.99774 5.83629C6.33147 5.86019 6.65616 5.95559 6.94978 6.11601C7.24341 6.27643 7.4991 6.49812 7.69951 6.76605C7.89248 7.02403 8.25805 7.07673 8.51603 6.88376C8.774 6.69078 8.8267 6.32522 8.63373 6.06724C8.33312 5.66535 7.94958 5.33281 7.50915 5.09218C7.06871 4.85155 6.58168 4.70846 6.08108 4.6726Z" fill="#12F7D6"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_907">
                    <rect width="14" height="14" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                      <a href="www.sinantokmak.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.sinantokmak.com</a>
                    </div>
                  </div>

                  <div className="flex mt-4">
                    <span className="bg-[#12F7D6] text-black font-bold px-2  rounded-full mr-2">HTML</span>
                    <span className="bg-[#12F7D6] text-black font-bold px-2  rounded-full mr-2">CSS</span>
                    <span className="bg-[#12F7D6] text-black font-bold px-2  rounded-full mr-2">JS</span>
                    <span className="bg-[#12F7D6] text-black font-bold px-2  rounded-full">REACT</span>
                  </div>

                  <button className=" bg-white flex gap-3 text-black  px-6 py-4 rounded-full mt-4">Download CV <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1C11 0.447715 10.5523 0 10 0C9.44771 0 9 0.447715 9 1V10.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L9.29289 13.7071C9.68342 14.0976 10.3166 14.0976 10.7071 13.7071L15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289L11 10.5858V1Z" fill="#292F36"/>
            <path d="M1 12C1.55228 12 2 12.4477 2 13V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13V17C20 17.7957 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7957 20 17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7957 0 17V13C0 12.4477 0.447715 12 1 12Z" fill="#292F36"/>
            </svg>

                  </button>
                </div>
                <div className="cont-2 px-10 flex flex-col items-start 2xl:flex-row gap-10 2xl:gap-0">
                    <div className="cont-2-1 py-20">
                        <div className='relative'>
                            <p className='text-[#12F7D6] text-sm relative top-[-10px] left-[-10px]'>{'<h1>'}</p>
                            <h1 className='text-6xl '>Hey</h1>
                            <h1 className='text-6xl '>I'm <span className='text-[#12F7D6]'>Fazal</span>,</h1>
                            <span className=' sm:hidden relative text-[#12F7D6] left-6 bottom-[-30px]'>{'</h1>'}</span>

                            <StaggeredLetter className='hidden sm-block
                            ' text='Full-stack Developer' >

                              <span className='relative text-[#12F7D6] left-6 bottom-[-30px]'>{'</h1>'}</span>
                          </StaggeredLetter>
                        
                        </div>
                        <div className='relative mt-10'>
                            <p className='text-[#12F7D6] text-sm relative top-[-10px] left-[-10px]'>{'<p>'}</p>
                            <p className='text-base mono'>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
                         <span className='text-[#12F7D6] text-sm relative  left-[-10px] '>{'</p>'}</span>
                        </div>
                        <div className='flex gap-6 items-center mt-5'>
                            <p className='text-3xl text-[#12F7D6] capitalize'>let's talk</p>
                            <div className='bg-white inset-0 bg-opacity-30 p-2 rounded-full '>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00014 5.98266C0.999973 5.99253 0.999957 6.00239 1.00009 6.01225V18C1.00009 19.6523 2.3478 21 4.00009 21H20.0001C21.6524 21 23.0001 19.6523 23.0001 18V6.01236C23.0002 6.00242 23.0002 5.99247 23 5.98251C22.9906 4.33822 21.6465 3 20.0001 3H4.00009C2.35359 3 1.00953 4.3383 1.00014 5.98266ZM3.10666 5.55395C3.27204 5.22692 3.61212 5 4.00009 5H20.0001C20.3881 5 20.7281 5.22692 20.8935 5.55395L12.0001 11.7793L3.10666 5.55395ZM21.0001 7.92066V18C21.0001 18.5477 20.5478 19 20.0001 19H4.00009C3.45237 19 3.00009 18.5477 3.00009 18V7.92066L11.4266 13.8192C11.7709 14.0603 12.2292 14.0603 12.5735 13.8192L21.0001 7.92066Z" fill="#12F7D6"/>
                            </svg>

                            </div>
                        </div>
                    </div>
                    <div className="hidden cont-2-2 md:pr-20 md:flex  mt-10">
                        <div className='bg-[#1A1E23]  flex justify-center items-center gap-20 py-20  rounded-full flex-col mono h-fit w-full md:px-16'>
                            <div className='flex gap-6   '>
                                <p className='text-6xl text-[#12F7D6]'>4</p>
                                <p className='text-xl w-24'>Programming
                                Language</p>
                            </div>
                            <div className='flex gap-6 '>
                                <p className='text-6xl text-[#12F7D6]'>6</p>
                                <p className='text-xl w-24'>Development Tools</p>
                            </div>
                            <div className='flex gap-6  '>
                                <p className='text-6xl text-[#12F7D6]'>0</p>
                                <p className='text-xl w-24'>Years Of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomeCompo1;



