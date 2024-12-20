import { cn } from "@/lib/utils";
import React from "react";

export default function ExampleOne({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <p>Hi {name}</p>
    </div>
  );
}
