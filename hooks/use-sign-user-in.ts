import { useMutation } from "@tanstack/react-query";

export const useSignUserInWithGoogle = () => {
  return useMutation({
    mutationFn: () => {
      console.log("Sign user in");
      return Promise.resolve();
    },
  });
};
