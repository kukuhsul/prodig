import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { Button } from "./index";

const stories = storiesOf("Components", module);

stories.add(
	"Button",
	withInfo({ inline: true })(() => {
		return (
			<div>
				<Button
					variant="orange"
				>
					Button Green
				</Button>
			</div>
		)
	})
);

