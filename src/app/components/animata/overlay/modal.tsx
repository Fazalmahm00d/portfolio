import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleAlert } from "lucide-react";

import { cn } from "@/lib/utils";

export default function Modal({ modalSize,details }: { modalSize?: "sm" | "lg",details:any }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute bottom-10 md:top-20 border-[#12F7D6] border-4 md:right-10 rounded-lg bg-[#1A1E23] p-2 font-medium text-[#12F7D6] transition-opacity hover:opacity-90"
      >
        View Details
      </button>

      <AnimatePresence>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 z-50 flex cursor-pointer items-center justify-center bg-slate-900/20 p-8 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0, rotate: "180deg" }}
              animate={{
                scale: 1,
                rotate: "0deg",
                transition: {
                  type: "spring",
                  bounce: 0.25,
                },
              }}
              exit={{ scale: 0, rotate: "180deg" }}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "relative w-full max-w-sm md:max-w-lg cursor-default overflow-hidden rounded-xl bg-[#1A1E23]/80 backdrop-blur p-6 text-white shadow-2xl",
                {
                  "max-w-sm": modalSize === "sm",
                },
              )}
            >
              <div className={cn("flex flex-col gap-3 text-2xl",{
                "text-sm":modalSize === "sm"
              })}>
              <div className="flex justify-end"><svg onClick={() => setIsOpen(false)} className="w-8 h-8 md:w-14 md:h-14 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#FFFFFF"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#FFFFFF"></path> </g></svg>
                </div>
                <div  className="w-fit h-fit md:w-full md:h-full  border-black border-8 rounded-xl ">
                <iframe
                  className="w-fit h-fit md:w-full md:h-full"
                  width="460"
                  height="250"
                  src={`https://www.youtube.com/embed/${details.videoId}&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen>
                </iframe>

                </div>
                <h3
                  className={cn("text-center text-3xl font-bold", {
                    "text-sm": modalSize === "sm",
                  })}
                >
                  {details.projectname}
                </h3>
                <p className="mb-1 text-center">
                  {details.projectdesc}
                </p>
                <p className="flex gap-2">
                {details.projectlang.map((item: string, index: number) => (
                    <div key={index} className=" p-2 bg-[#12F7D6] font-semibold rounded-md text-black">
                    {item}
                    </div>
                ))}
                </p>
                <div className="flex gap-2">
                  <button
                    
                    className="w-full rounded bg-transparent py-2 font-semibold text-[#12F7D6] transition-colors hover:bg-white/30"
                  >
                    View Code
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded bg-[#12F7D6] py-2 font-semibold text-black transition-opacity hover:opacity-80"
                  >
                    View Live Project
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
