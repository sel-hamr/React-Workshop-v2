import React from "react";

const data = {
  key1: "value1",
  key2: "value2",
  key3: {
    innerKey1: "innerValue1",
    innerKey2: "innerValue2",
    innerKey3: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
};

const isObject = (value: string) => typeof value === "object" && value !== null;
export default function RecursiveWithObject({ data }: Record<string, any>) {
  if (!isObject(data)) return <li>{data}</li>;
  else {
    const values = Object.entries(data);
    return values.map(([key, value]) => {
      return (
        <>
          <p>{key}</p>
          <RecursiveWithObject data={value} />
        </>
      );
    });
  }
}

export const DemoRecursiveWithObject = () => {
  return <RecursiveWithObject data={data} />;
};
