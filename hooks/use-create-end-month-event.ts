import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useCreateEndMonthEvent = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: () => {
      console.log("will create");
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
