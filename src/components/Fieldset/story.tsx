import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import { Fieldset } from "./index";
import { Input } from "../Input";

const stories = storiesOf("Components", module);

stories.add(
	"Fieldset",
	withInfo({ inline: true })(() => {
		return (
			<Fieldset
				label="Nama Anda"
				fieldName="nama"
				helper="Nama Anda adalah doa dari orang tua :D"
			>
				<Input
					id="nama"
					type="text"
				/>
			</Fieldset>
		)
	})
);

