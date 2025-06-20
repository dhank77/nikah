import React from "react";
import { Editor, Frame, Element } from "@craftjs/core";
import { Toolbox } from "@/components/editors/toolbox";
import { SettingsPanel } from "@/components/editors/settings-panel";
import { Text } from "@/components/editors/text";
import { Container } from "@/components/editors/container";

const WelcomeEditor: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Editor resolver={{ Text, Container }}>
        <div className="flex w-full">
          <div className="w-64 bg-gray-100 p-4">
            <Toolbox />
          </div>
          <div className="flex-1 bg-white p-4 overflow-auto">
            <Frame>
              <Element is={Container} padding={10} background="#f4f4f4" canvas>
                <Text text="Selamat datang di undangan builder!" fontSize={24} />
              </Element>
            </Frame>
          </div>
          <div className="w-64 bg-gray-100 p-4">
            <SettingsPanel />
          </div>
        </div>
      </Editor>
    </div>
  );
};

export default WelcomeEditor;
