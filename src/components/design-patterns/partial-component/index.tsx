import React from "react";

export const Label = ({ color, size }: { color?: string; size?: string }) => {
  return (
    <div>
      <p style={{ color: color, fontSize: size }}>Hello World</p>
    </div>
  );
};

export const partialComponent = (Component: React.FC, partialProps: any) => {
  return (props: any) => {
    return <Component {...partialProps} {...props} />;
  };
};

const RedTitle = partialComponent(Label, { color: "red" });

export const DemoPartialComponent = () => {
  return <RedTitle size="20px" />;
};
