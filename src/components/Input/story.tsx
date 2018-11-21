import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { Input } from "./index";

const stories = storiesOf("Components", module);

stories.add(
	"Input",
	withInfo({ inline: true })(() => {
		return (
			<div>
				<Input
					name="nama"
					type="text"
				/>
				<Input
					disabled={true}
					name="password"
					type="password"
				/>
			</div>
		)
	})
);

