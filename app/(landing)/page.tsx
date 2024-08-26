import { CalendarSection } from '@/components/calendar-section';
import { HeroSection } from '@/components/hero-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recurring Google Calendar Events for Month-End',
  description:
    'Schedule recurring Google Calendar events for the end of each month with EndCycle. Automate your monthly events effortlessly where Google Calendar falls short.',
  keywords:
    'Recurring Google Calendar events, end of month calendar events, monthly recurring events, Google Calendar automation, schedule end of month events, month-end scheduling tool',
  openGraph: {
    title: 'Recurring Google Calendar Events for Month-End',
    description:
      'Easily schedule monthly recurring events at the end of each month with EndCycle, the app that fills the gap in Google Calendar.',
    images: [],
    url: '',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recurring Google Calendar Events for Month-End',
    description:
      'Automate monthly events on Google Calendar with EndCycle. Say goodbye to manual scheduling for the end of each month.',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <CalendarSection />
    </main>
  );
}
