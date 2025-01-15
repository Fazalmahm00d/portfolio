import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface DropLetterProps extends HTMLAttributes<HTMLDivElement> {
  applyMask?: boolean;

  text?: string;

  delay?: number;

  direction?: "up" | "drop";

  children?: React.ReactNode
}

export default function StaggeredLetter({
  applyMask = true,
  text = "Animata",
  delay = 0.09,
  direction = "drop",
  className,
  ...props
}: DropLetterProps) {
  const common = "text-6xl text-white font-bold drop-shadow-lg";
  return (
    <div
      className={cn(
        "relative flex flex-col items-start justify-center ",
        className,
      )}
      {...props}
    >
      {applyMask && <div className={cn(common, "absolute text-gray-400")}>{text}</div>}
      <div className="flex">
        {text.split("").map((letter, index) => (
          <motion.div
            className={common}
            initial={{ opacity: 0, y: direction === "up" ? 150 : -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * delay,
            }}
            key={letter}
          >
            {letter === " " ? <span>&nbsp;</span> : letter}
            
          </motion.div>
          
        ))}
        {props.children}
      </div>
    </div>
  );
}
