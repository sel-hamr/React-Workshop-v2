import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "../types";
import { Control, useController, UseFormSetValue } from "react-hook-form";
import { cn } from "@/lib/utils";

type SelectField = FormField & {
  control: Control;
  setValue: UseFormSetValue<{
    [x: string]: any;
  }>;
};
const SelectField = ({
  control,
  name,
  placeholder,
  options,
  label,
  width,
  setValue,
}: SelectField) => {
  const {
    formState: { errors },
  } = useController({ control, name });

  const onValueChange = (value: string) => {
    setValue(name, value, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5",
        errors[name] ? "text-red-600" : ""
      )}
      style={{ width: width !== 1 ? `${width * 100 - 3}%` : "100%" }}
    >
      <Label htmlFor={name}>{label}</Label>
      <Select {...control.register(name)} onValueChange={onValueChange}>
        <SelectTrigger id={name}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="popper">
          {options &&
            options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
      {errors[name] && (
        <span className={cn("text-sm text-red-600")}>
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default SelectField;
