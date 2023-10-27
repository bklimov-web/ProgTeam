"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "components/shared/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "components/shared/ui/form";
import { Input } from "components/shared/ui/input";
import { BackgroundBlockProps } from "./background-block";
import { SheetClose } from "components/shared/ui/sheet";

const formSchema = z.object({
  color: z.string(),
  titlebg: z.string(),
});

export type BackgroundFormSchema = z.infer<typeof formSchema>;

function BackgroundForm({
  defaultValues,
  updateBlock,
}: {
  defaultValues: BackgroundBlockProps;
  updateBlock: (values: { content: BackgroundFormSchema }) => void;
}) {
  const form = useForm<BackgroundFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: BackgroundFormSchema) {
    updateBlock({ content: values });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex">
          <Button className="w-[50%]" type="submit">
            Save
          </Button>
          <SheetClose className="w-[50%]" asChild>
            <Button variant={"secondary"} type="submit">
              Save and close
            </Button>
          </SheetClose>
        </div>

        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Change color</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="titlebg"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default BackgroundForm;
