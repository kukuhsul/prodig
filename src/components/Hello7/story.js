import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Hello from "./index";

const stories = storiesOf("Components", module);

stories.add(
  "Hello",
  withInfo({ inline: true })(() => <Hello text="HALO FROM STORYBOOK" onClick={action("onClick")} />)
);
