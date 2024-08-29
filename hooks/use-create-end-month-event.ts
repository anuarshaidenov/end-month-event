import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useCreateEndMonthEvent = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: (data: { eventTitle: string; googleToken: string }) => {
      console.log({
        title: data.eventTitle,
        token: data.googleToken,
      });
      return Promise.resolve("success");
    },
    onSuccess: (res) => {
      toast({
        variant: "default",
        title: res,
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
