import { createClient } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const useSession = () => {
  const supabase = createClient();

  return useQuery({
    queryKey: ["session"],
    queryFn: () => supabase.auth.getSession(),
  });
};
