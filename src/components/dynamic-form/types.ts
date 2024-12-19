type Button = {
  label: string;
  variant?:
    | "outline"
    | "link"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  type?: "submit" | "reset" | "button";
  className?: string;
};

export type FormField = {
  type:
    | "text"
    | "select"
    | "action"
    | "email"
    | "password"
    | "checkbox"
    | "array-fields";
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  width: number;
  options?: { value: string; label: string }[];
  buttons?: Button[];
  required?: boolean;
  fields?: FormField[];
};
