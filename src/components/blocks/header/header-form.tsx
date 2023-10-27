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
import { HeaderContentProps } from "./Header";
import { SheetClose } from "components/shared/ui/sheet";

const formSchema = z.object({
  logo: z.string(),
  navLinks: z.string(),
});

export type HeaderFormSchema = z.infer<typeof formSchema>;

function HeaderForm({
  defaultValues,
  updateBlock,
}: {
  defaultValues: HeaderContentProps;
  updateBlock: (values: { content: HeaderFormSchema }) => void;
}) {
  const form = useForm<HeaderFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: HeaderFormSchema) {
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
          name="logo"
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

export default HeaderForm;
