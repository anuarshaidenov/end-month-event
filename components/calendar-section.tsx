import { CalendarCard } from "./calendar-card";

type Props = {};

export const CalendarSection = (props: Props) => {
  return (
    <section
      id="calendar-section"
      className="container py-12 h-screen flex items-start justify-center"
    >
      <CalendarCard />
    </section>
  );
};
