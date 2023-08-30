import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup";
import { ConfigProvider } from "antd";

function init() {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  const root = createRoot(appContainer);
  console.log(appContainer);

  root.render(
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1d39c4",
          fontSize: 14,
          fontWeightStrong: 400,
          fontFamily: "Roboto",
        },
      }}
      direction={"ltr"}
    >
      <Popup />
    </ConfigProvider>
  );
}

init();
