import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@/lib/supabase/client";
import { useMutation } from "@tanstack/react-query";

export const useSignUserInWithGoogle = () => {
  const supabase = createClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: () => {
      return supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          scopes: "https://www.googleapis.com/auth/calendar",
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
          skipBrowserRedirect: true,
        },
      });
    },
    onSuccess: (res) => {
      toast({
        description: "Signed in successfully",
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
