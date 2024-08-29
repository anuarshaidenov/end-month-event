import { createClient } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {
  const supabase = createClient();

  return useQuery({
    queryKey: ["user"],
    queryFn: () => supabase.auth.getUser(),
  });
};
