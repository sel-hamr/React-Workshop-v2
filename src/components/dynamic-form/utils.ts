import { FormField } from "./types";
import { z } from "zod";

export const generateSchema = (fields: FormField[]) => {
  const schemaFields: Record<string, any> = {};

  fields.forEach((field) => {
    if (field.type === "action") {
      return;
    }
    let schema;
    switch (field.type) {
      case "text":
        schema = z.string();
        if (field.required) {
          schema = schema.min(1, field.error || "Default error message");
        }
        break;
      case "select":
        schema = z.string();
        if (field.required) {
          schema = schema.min(5, field.error || "Default error message");
        }
        break;
      case "email":
        schema = z.string().email();
        if (field.required) {
          schema = schema.email(field.error || "Default error message");
        }
        break;
      case "password":
        schema = z.string().min(8);
        if (field.required) {
          schema = schema.min(8, field.error || "Default error message");
        }
        break;
      case "checkbox":
        schema = z.boolean();
        if (field.required) {
          schema = schema.refine((value) => value === true, {
            message: field.error || "Default error message",
          });
        }
        break;
      case "array-fields":
        schema = z.array(generateSchema(field.fields!));
        break;
      default:
        throw new Error(`Unsupported field type: ${field.type}`);
    }
    schemaFields[field.name!] = schema;
  });
  return z.object(schemaFields);
};
