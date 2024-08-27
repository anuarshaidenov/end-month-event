import React from "react";
import { Button } from "@/components/ui/button";
import ShiningButton from "./ui/shining-button";
import { HeroCalendar } from "./ui/hero-calendar";

type Props = {};

export const HeroSection = (props: Props) => {
  return (
    <section className="container text-center flex flex-col items-center gap-4 md:gap-8 py-12">
      <span
        className="text-center block text-5xl md:text-[5rem]"
        role="img"
        aria-label="calendar"
        style={{ lineHeight: 1 }}
      >
        📅
      </span>

      <div className="flex flex-col gap-4">
        <h1 className="font-bricolageGrotesque leading-none font-extrabold text-5xl md:text-[5rem] animate-fade-in-05">
          Make recurring events <br /> for the end of <br /> Each month <br />
          Effortlessly
        </h1>
        <p className="text-lg text-secondary-foreground animate-fade-in-10">
          Google Calendar can’t do it, but we can. <br /> Schedule your monthly
          recurring events with precision, and never miss a deadline again.
        </p>
      </div>

      <ShiningButton className="animate-fade-in-15">
        Start Scheduling Now
      </ShiningButton>

      <div className=" aspect-video h-[50vh] -translate-x-[30%] md:w-full md:translate-x-0 md:h-auto">
        <HeroCalendar />
      </div>
      {/* <div className="md:aspect-video md:static md:w-full h-screen w-screen">
        <HeroCalendar />
      </div> */}
    </section>
  );
};
