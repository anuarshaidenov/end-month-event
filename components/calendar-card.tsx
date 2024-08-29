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
    mutateAsync: signUserInWithGoogle,
    isPending: isSigningUserInWithGoogle,
  } = useSignUserInWithGoogle();
  const {
    mutateAsync: createEndMonthEvent,
    isPending: isCreatingEndMonthEvent,
  } = useCreateEndMonthEvent();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await signUserInWithGoogle();
    await createEndMonthEvent();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <Card className="max-w-4xl w-full mx-auto bg-secondary">
          <CardHeader>
            <h4 className="font-semibold">Create a recurring event </h4>
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
            <Button
              disabled={isCreatingEndMonthEvent || isSigningUserInWithGoogle}
              type="submit"
            >
              Create event
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};
