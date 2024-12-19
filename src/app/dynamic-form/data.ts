import { FormField } from "@/components/dynamic-form/types";

export const exampleData: FormField[] = [
  {
    type: "text",
    name: "name",
    label: "Name",
    placeholder: "Name of your project",
    error: "Name is required",
    width: 1,
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "Email",
    error: "Email is required",
    width: 1,
  },
  {
    type: "select",
    name: "framework",
    label: "Framework",
    placeholder: "Select",
    options: [
      { value: "next", label: "Next.js" },
      { value: "sveltekit", label: "SvelteKit" },
      { value: "astro", label: "Astro" },
      { value: "nuxt", label: "Nuxt.js" },
    ],
    error: "Framework is required",
    width: 1,
  },
  {
    width: 1,
    name: "actions",
    type: "action",
    buttons: [
      { label: "Submit", type: "submit" },
      { label: "Reset", type: "reset", variant: "outline" },
    ],
  },
];

export const exampleData2: FormField[] = [
  {
    type: "text",
    name: "name",
    label: "Name",
    placeholder: "Name of your project",
    error: "Name is required",
    width: 1,
    required: true,
  },
  {
    type: "array-fields",
    name: "tasks",
    width: 1,
    fields: [
      {
        type: "text",
        name: "name task",
        label: "Name",
        placeholder: "Name of your task",
        error: "Name is required",
        width: 1,
        required: true,
      },
    ],
  },
  {
    type: "checkbox",
    name: "accept",
    label: "Accept terms",
    width: 1,
    required: true,
  },
  {
    width: 1,
    name: "actions",
    type: "action",
    buttons: [{ label: "Submit", type: "submit", className: "w-full" }],
  },
];

export const exampleData3: FormField[] = [
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "Email",
    error: "Email is required",
    width: 1,
    required: true,
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Password",
    error: "Password is required",
    width: 1,
  },
  {
    type: "action",
    name: "actions",
    buttons: [
      {
        label: "Submit",
        type: "submit",
        className: "w-full",
        variant: "secondary",
      },
    ],
    width: 1,
  },
];
