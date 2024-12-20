import React from "react";

type DataType = {
  data: {
    name: string;
    children: DataType["data"][];
  };
};

export default function RecursiveWithArray({ data }: DataType) {
  return (
    <div className="mt-8">
      <p>{data.name}</p>
      {data.children && data.children.length > 0 && (
        <div>
          {data.children.map((child, index) => (
            <RecursiveWithArray key={index} data={child} />
          ))}
        </div>
      )}
    </div>
  );
}
