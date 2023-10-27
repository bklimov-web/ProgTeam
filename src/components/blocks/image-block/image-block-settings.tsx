"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/shared/ui/select";
import { Input } from "components/shared/ui/input";
import { Button } from "components/shared/ui/button";
import { useForm } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "components/shared/ui/popover";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "components/shared/ui/form";
import { ChromePicker } from "react-color";
import { ImageBlockProps, divStyles } from "./types";

const ImageBlockSettings = ({ divStyles, updateBlock }: ImageBlockProps) => {
  const form = useForm<divStyles>({
    defaultValues: divStyles,
  });

  function onSubmit(values: divStyles) {
    updateBlock({ styles: values });
  }

  return (
    <Form {...form}>
      <form className="w-[90%] space-y-6">
        <FormField
          control={form.control}
          name="paddingTop"
          render={({ field }) => {
            const { ref, ...restField } = field;

            return (
              <FormItem>
                <FormLabel>Padding Top</FormLabel>

                <div ref={ref}>
                  <Select onValueChange={field.onChange} {...restField}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select padding top" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="10px">10px</SelectItem>
                      <SelectItem value="30px">30px</SelectItem>
                      <SelectItem value="50px">50px</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="paddingBottom"
          render={({ field }) => {
            const { ref, ...restField } = field;

            return (
              <FormItem>
                <FormLabel>Padding Bottom</FormLabel>

                <div ref={ref}>
                  <Select onValueChange={field.onChange} {...restField}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select padding bottom" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="10px">10px</SelectItem>
                      <SelectItem value="30px">30px</SelectItem>
                      <SelectItem value="50px">50px</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="background"
          render={({ field }) => (
            <FormItem className="w-[100%]">
              <FormLabel>Background Color</FormLabel>
              <br />
              <Popover>
                <PopoverTrigger className="w-[100%]">
                  <FormControl>
                    <Input placeholder="background color" {...field} />
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <ChromePicker
                    color={field.value}
                    onChange={(e) => {
                      field.onChange(e.hex);
                    }}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-around w-[100%] h-[300px] items-end">
          <Button className="w-[150px]" onClick={form.handleSubmit(onSubmit)}>
            Submit
          </Button>
          <Button
            type="button"
            className="w-[150px]"
            onClick={() => form.reset()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ImageBlockSettings;
