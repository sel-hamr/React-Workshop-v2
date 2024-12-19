import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { FormField } from "../types";

type InputField = ComponentProps<"input"> & FormField & { control: Control };

const InputField = ({ label, name, control, width, ...props }: InputField) => {
  const {
    formState: { errors },
  } = useController({ control, name });
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5",
        errors[name] ? "text-red-600" : ""
      )}
      style={{ width: width !== 1 ? `${width * 100 - 3}%` : "100%" }}
    >
      <Label htmlFor={name}>{label}</Label>
      <Input {...control.register(name)} id={name} {...props} />
      {errors[name] && (
        <span className={cn("text-sm text-red-600")}>
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default InputField;
