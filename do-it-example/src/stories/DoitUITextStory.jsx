import React from "react";
import { storiesOf } from "@storybook/react";

import Text from "../doit_ui/Text";

storiesOf("Doit-UI/Text", module).addWithJSX("Text 예제", () => (
    <div>
        <Text xlarge>Xlarge</Text>
        <Text xlarge primary>Xlarge primary</Text>
        <Text xlarge secondary>Xlarge secondary</Text>
        <Text xlarge bold>Xlarge bold</Text>
    </div>
));
