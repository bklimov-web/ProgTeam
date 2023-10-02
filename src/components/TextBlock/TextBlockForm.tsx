"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";
import { TextBlockContentProps } from "./TextBlock";
import { SheetClose } from "components/ui/sheet";

const formSchema = z.object({
  subtitle: z.string(),
  title: z.string(),
  description: z.string(),
});

export type TextBlockFormSchema = z.infer<typeof formSchema>;

function TextBlockConfig({
  defaultValues,
  updateBlock,
}: {
  defaultValues: TextBlockContentProps;
  updateBlock: (values: any) => void;
}) {
  // 1. Define your form.
  const form = useForm<TextBlockFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: TextBlockFormSchema) {
    updateBlock(values);
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
          name="subtitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subtitle</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default TextBlockConfig;
