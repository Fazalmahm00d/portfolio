import React from "react";
interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Starting gradient color.
   */
  fromColor?: string;
  /**
   * Middle gradient color.
   */
  viaColor?: string;
  /**
   * Ending gradient color.
   */
  toColor?: string;

  children?: React.ReactNode
}

export default function GlowingCard({
  fromColor = "#292F36",
  viaColor = "#98FAEC",
  toColor = "#70ffb1",
  children
}: GlowCardProps) {
  return (
    <div
      className="relative rounded-3xl bg-gradient-to-r p-0.5 hover:shadow-glow hover:brightness-150"
      style={{
        transition: " box-shadow 0.5s ease",
        backgroundImage: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
      }}
    >
      <div
        className="absolute blur-20 z-20 top-0  inset-0 h-full w-full rounded-3xl bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] "
        style={{ transition: "filter 0.5s ease" }}
      />
      {/* <div className="flex h-64 w-56 flex-col gap-2 rounded-3xl bg-blue-950 p-4">
        <div className="mb-2 text-xl font-bold text-gray-50">Glowing</div>

        <div className="flex-1 text-sm font-medium text-gray-100 text-opacity-80">
          A glowing card is a card that glows.
        </div>
      </div> */}
      {children}
    </div>
  );
}
