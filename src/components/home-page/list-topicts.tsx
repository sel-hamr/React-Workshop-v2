import Box from "@/components/ui/box";
import { topics } from "@/data";
import React from "react";

export const ListTopics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3 ">
      {topics.map((item, key) => (
        <Box key={key} title={item.title} href={item.link} />
      ))}
    </div>
  );
};
