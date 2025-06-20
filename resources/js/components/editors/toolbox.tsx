import React from "react";
import { useEditor } from "@craftjs/core";
import { Text } from "./text";
import { Container } from "./container";

export const Toolbox: React.FC = () => {
  const { connectors } = useEditor();
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Toolbox</h2>
      <div
        className="p-2 bg-white mb-2 border cursor-move"
        ref={(ref) => ref && connectors.create(ref, <Text />)}
      >
        Tambah Teks
      </div>
      <div
        className="p-2 bg-white mb-2 border cursor-move"
        ref={(ref) => ref && connectors.create(ref, <Container />)}
      >
        Tambah Container
      </div>
    </div>
  );
};
