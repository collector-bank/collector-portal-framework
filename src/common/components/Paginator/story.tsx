import { withKnobs, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Paginator } from "./";

const components = storiesOf("Components", module);

components.addDecorator(withKnobs);

components.add("Paginator", () => {
  let list = [];
  for(let i = 1; i <= 20; i++)
    list.push(i);

  return (
    <Paginator
      numberOfItems={500}
      numbersInMiddle={5}
      pageSize={25}
      activePage={parseInt(select('Sida', list, 1) as any)}
      onChange={activePage => null}
    />
  );
});
