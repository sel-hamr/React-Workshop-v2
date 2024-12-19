import { Control, useController } from "react-hook-form";
import { FormField } from "../types";
import { cn } from "@/lib/utils";

type CheckboxProps = {
  control: Control;
} & FormField;

const CheckboxField = ({ control, name }: CheckboxProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });
  return (
    <div>
      <div className="flex gap-2">
        <input type="checkbox" {...control.register(name)} />
        <label className={cn("text-sm ", errors[name] ? "text-red-600" : "")}>
          Checkbox
        </label>
      </div>
      {errors[name] && (
        <span className="text-sm text-red-600">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default CheckboxField;
