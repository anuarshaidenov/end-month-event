import { CalendarCard } from './calendar-card';

type Props = {};

export const CalendarSection = (props: Props) => {
  return (
    <section className="container py-12">
      <CalendarCard />
    </section>
  );
};
