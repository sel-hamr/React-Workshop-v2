import React from "react";
import { FormField } from "../types";
import { Control, UseFormSetValue } from "react-hook-form";
import SelectField from "./select";
import ActionField from "./action";
import InputField from "./input";
import CheckboxField from "./checkbox";
import ArrayFields from "./array-fields";

const FormItem = ({
  field,
  control,
  setValue,
}: {
  field: FormField;
  control: Control;
  setValue: UseFormSetValue<{
    [x: string]: any;
  }>;
}) => {
  switch (field.type) {
    case "text":
      return <InputField {...field} control={control} />;
    case "password":
      return (
        <InputField
          {...field}
          control={control}
          type="password"
          autoComplete="current-password"
        />
      );
    case "select":
      return <SelectField {...field} control={control} setValue={setValue} />;
    case "action":
      return <ActionField {...field} control={control} />;
    case "checkbox":
      return <CheckboxField {...field} control={control} />;
    case "array-fields":
      return (
        <ArrayFields field={field} control={control} setValue={setValue} />
      );
    case "email":
      return (
        <InputField
          {...field}
          control={control}
          type="email"
          autoComplete="email"
        />
      );
    default:
      return null;
  }
};

export default FormItem;
