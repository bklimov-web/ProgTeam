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
import { ChromePicker } from "react-color";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "components/shared/ui/form";
//import { toast } from "@/components/ui/use-toast";

type img = {
  id: number;
  alt: string;
  src: string;
};
interface divStyles {
  paddingBottom: string;
  paddingTop: string;
  background: string;
}
type ImageProps = {
  data: img[];
  handleDivStyleChange: (data: divStyles) => void;
  backgroundColor: string;
  styles?: {};
  divStyles: divStyles;
};

const ImageBlockSettings = ({
  data,
  handleDivStyleChange,
  backgroundColor,
  divStyles,
}: ImageProps) => {
  const handleRegistration = (data: divStyles) => handleDivStyleChange(data);

  const form = useForm<divStyles>({
    defaultValues: divStyles,
  });

  return (
    <Form {...form}>
      <form
        className="w-2/3 space-y-6"
        onSubmit={form.handleSubmit(handleRegistration)}
      >
        <FormField
          control={form.control}
          name="paddingTop"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Padding Top</FormLabel>
              <Select onValueChange={field.onChange} {...field}>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paddingBottom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Padding Bottom</FormLabel>
              <Select onValueChange={field.onChange} {...field}>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="background"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Background Color</FormLabel>
              <FormControl>
                <Input placeholder="background color" {...field} />
              </FormControl>
              <ChromePicker
                color={field.value}
                onChange={(e) => {
                  field.onChange(e.hex);
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ImageBlockSettings;
