import { Inter } from "next/font/google";
import { Hero } from "@/components/hero";
import { Card } from "@/components/card";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <Card />
      </div>
    </>
  );
}
