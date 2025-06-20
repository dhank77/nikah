import React from "react";
import { useNode } from "@craftjs/core";

type ContainerProps = {
  padding: number;
  background: string;
  children?: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children, padding, background }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => ref && connect(drag(ref))}
      style={{ padding: `${padding}px`, background }}
    >
      {children}
    </div>
  );
};

Container.craft = {
  displayName: "Container",
  props: {
    padding: 20,
    background: "#ffffff",
  },
  rules: {
    canMoveIn: () => true,
  },
};
