"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateSchema } from "./utils";
import { FormField } from "./types";
import FormItem from "./form-item";
import { useKeyDown } from "./useKeyDown";

export type DynamicFormProps = {
  title: string;
  description: string;
  dataFields: FormField[];
};

const DynamicForm = ({ description, title, dataFields }: DynamicFormProps) => {
  const UserScheme = generateSchema(dataFields);
  type SchemeType = z.infer<typeof UserScheme>;

  const { handleSubmit, control, setValue } = useForm<SchemeType>({
    resolver: zodResolver(UserScheme),
  });

  const onSubmit = async (data: SchemeType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("data", data);
  };
  useKeyDown(
    "Enter",
    () => {
      console.log("Enter key pressed");
      handleSubmit(onSubmit)();
    },
    []
  );
  return (
    <Card className="flex-1 basis-72 max-w-96">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="flex flex-wrap w-full items-center gap-4 ">
            {dataFields.map((field: FormField, index) => (
              <FormItem
                key={index}
                field={field}
                control={control}
                setValue={setValue}
              />
            ))}
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default DynamicForm;
