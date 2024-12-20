"use client";

import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactElement<{ data?: ExampleProps["data"] }>;
  getData: () => void;
};

export default function ContainerComponents({ children, getData }: Props) {
  const [data, setData] = useState<ExampleProps["data"]>();

  useEffect(() => {
    (async () => {
      const res = (await getData()) as ExampleProps["data"];
      setData(res);
    })();
  }, []);

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        data,
      });
    } else {
      return child;
    }
  });
}

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await res.json();
};

type ExampleProps = {
  data?: { title: string } | null;
};

const Example = ({ data }: ExampleProps) => {
  if (!data) return <p>Loading ...</p>;
  return <p>{data.title}</p>;
};

export const DemoContainerComponents = () => {
  return (
    <ContainerComponents getData={fetchData}>
      <Example />
    </ContainerComponents>
  );
};
