"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useCreateEndMonthEvent } from "@/hooks/use-create-end-month-event";
import { useSignUserInWithGoogle } from "@/hooks/use-sign-user-in";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "@/hooks/use-session";
import { cn } from "@/lib/utils";

type Props = {};

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title must be at least 1 characters.",
  }),
});
export const CalendarCard = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const {
    data: sessionData,
    isLoading: isSessionLoading,
    isError: sessionError,
  } = useSession();
  const {
    mutateAsync: signUserInWithGoogle,
    isPending: isSigningUserInWithGoogle,
  } = useSignUserInWithGoogle();
  const {
    mutateAsync: createEndMonthEvent,
    isPending: isCreatingEndMonthEvent,
  } = useCreateEndMonthEvent();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const googleToken = sessionData?.data.session?.provider_token;
    if (!googleToken || sessionError) {
      await signUserInWithGoogle();
      return;
    }

    await createEndMonthEvent(
      {
        googleToken,
        eventTitle: values.title,
      },
      {
        onSuccess: () => {
          form.reset();
        },
      }
    );
  }

  if (isSessionLoading) {
    return <Skeleton className="h-[226px]" />;
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      {!sessionData?.data.session?.provider_token && (
        <Card className="max-w-4xl w-full mx-auto bg-secondary">
          <CardHeader>
            Please sign in to your google account for us to be able to add the
            event to your calendar
          </CardHeader>
          <CardFooter>
            <Button
              onClick={() => signUserInWithGoogle()}
              disabled={isSigningUserInWithGoogle}
            >
              Sign in with Google
            </Button>
          </CardFooter>
        </Card>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("space-y-8 w-full", {
            "opacity-50":
              isSessionLoading || !sessionData?.data.session?.provider_token,
            "pointer-events-none":
              isSessionLoading || !sessionData?.data.session?.provider_token,
          })}
        >
          <Card className="max-w-4xl w-full mx-auto bg-secondary">
            <CardHeader>
              <h4 className="font-semibold">
                Create a recurring event for the end of the month
              </h4>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event title</FormLabel>
                    <FormControl>
                      <Input
                        className="border-foreground"
                        placeholder="Salary day"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button disabled={isCreatingEndMonthEvent} type="submit">
                Create event
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};
