import React from "react";

export default function SplitScreen({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: {
  children: React.ReactNode;
  leftWeight?: number;
  rightWeight?: number;
}) {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="flex w-full">
      <div style={{ flex: leftWeight }}>{left}</div>
      <div style={{ flex: rightWeight }}>{right}</div>
    </div>
  );
}
