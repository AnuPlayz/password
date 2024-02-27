"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function Hero() {
  const words = [
    {
      text: "Generate",
    },
    {
      text: "secure",
    },
    {
      text: "passwords",
    },
    {
      text: "with",
    },
    {
      text: "Piyush.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to secure passwords starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
