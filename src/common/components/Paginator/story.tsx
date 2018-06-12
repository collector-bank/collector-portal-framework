import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Paginator } from "./";

const components = storiesOf("Components", module);

components.addDecorator(withKnobs);

components.add("Paginator", () => {
  return (
    <Paginator
      numberOfItems={500}
      numbersInMiddle={5}
      pageSize={25}
      onChange={activePage => null}
    />
  );
});
