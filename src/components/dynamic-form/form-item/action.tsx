import React from "react";
import { CardFooter } from "../../ui/card";
import { FormField } from "../types";
import { Control, useController } from "react-hook-form";
import { Button } from "../../ui/button";

type ActionField = FormField & { control: Control };

const ActionField = ({ control, buttons }: ActionField) => {
  const {
    formState: { isSubmitting },
  } = useController({ control, name: "" });
  return (
    <CardFooter className="flex justify-between p-0 w-full">
      {buttons &&
        buttons?.map((button) => (
          <Button
            key={button.label}
            variant={button.variant}
            type={button.type}
            disabled={isSubmitting}
            className={button.className}
          >
            {button.type === "submit" && isSubmitting
              ? "Loading..."
              : button.label}
          </Button>
        ))}
    </CardFooter>
  );
};

export default ActionField;
