import { useToast } from "@/components/ui/use-toast";
import { getLastDayOfMonth } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type GDate =
  | {
      dateTime: string;
      timeZone: string;
    }
  | {
      date: string;
    };

type GEvent = {
  summary: string;
  description?: string;
  start: GDate;
  end: GDate;
  reminders?: {
    useDefault: boolean;
    overrides: [{ method: "popup" | "email"; minutes: number }];
  };
  attendees?: [{ email: string; comment: string }];
  sendUpdates?: "all" | "externalOnly" | "none";
  recurrence?: string[];
};

export const useCreateEndMonthEvent = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: (data: { eventTitle: string; googleToken: string }) => {
      const lastDayOfMonth = getLastDayOfMonth();
      const startDate = lastDayOfMonth.toISOString().split("T")[0]; // Extract only the date portion
      const endDate = new Date(lastDayOfMonth.getTime() + 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

      const gEvent: GEvent = {
        summary: data.eventTitle,
        start: {
          date: startDate,
        },
        end: {
          date: endDate,
        },
        recurrence: ["RRULE:FREQ=MONTHLY;BYMONTHDAY=-1"],
      };
      const endpoint =
        "https://www.googleapis.com/calendar/v3/calendars/primary/events";

      return axios.post(endpoint, gEvent, {
        headers: {
          Authorization: `Bearer ${data.googleToken}`,
        },
      });
    },
    onSuccess: (res) => {
      toast({
        variant: "default",
        title: "",
        description: "Event added successfully!",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};
