import { cn } from "@/lib/utils";
import React from "react";

export default function ExampleTwo({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <h1>{name}</h1>
    </div>
  );
}
