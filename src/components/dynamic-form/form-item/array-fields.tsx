import { Control, useFieldArray, UseFormSetValue } from "react-hook-form";
import { FormField } from "../types";
import { Button } from "@/components/ui/button";
import { PlusIcon, Trash2 } from "lucide-react";
import FormItem from ".";

type ArrayFieldsProps = {
  field: FormField;
  control: Control;
  setValue: UseFormSetValue<{
    [x: string]: any;
  }>;
};

const ArrayFields = ({ control, field, setValue }: ArrayFieldsProps) => {
  const { name, fields: formFields } = field;
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: name,
  });
  return (
    <div className="w-full">
      {fields.map((item, index) => (
        <div key={item.id} className="flex items-end justify-between mb-1.5">
          {formFields &&
            formFields.map((field, index) => (
              <div key={index} className="flex space-x-2 w-4/5">
                <FormItem
                  key={index}
                  field={
                    {
                      ...field,
                      name: `${name}.${index}.${field.name}`,
                    } as FormField
                  }
                  control={control}
                  setValue={setValue}
                />
              </div>
            ))}
          <Button type="button" onClick={() => remove(index)} variant="outline">
            <Trash2 size={16} />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          append({ name: "" });
        }}
        className="w-full"
      >
        <PlusIcon size={16} />
      </Button>
    </div>
  );
};

export default ArrayFields;
