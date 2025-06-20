import React from "react";
import { useNode } from "@craftjs/core";

type TextProps = {
  text: string;
  fontSize: number;
};

export const Text: React.FC<TextProps> = ({ text, fontSize }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  
  return (
    <div ref={(ref) => ref && connect(drag(ref))} style={{ fontSize }}>
      {text}
    </div>
  );
};

Text.craft = {
  displayName: "Text",
  props: {
    text: "Teks Default",
    fontSize: 14,
  },
};
