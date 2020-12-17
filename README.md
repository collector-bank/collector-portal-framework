# Collector Portal Framework

[![CD Actions Status]][build-url]
[![NPM version][npm-image]][npm-url]

A collection of UI components and helper functions used in a couple of our internal and external web applications at [Collector Bank](https://www.collector.se/).
Documentation and an interactive test area can be found [here](https://collector-bank.github.io/collector-portal-framework/).


## This package contains

* UI components
* [Formatter functions](src/formatters.ts)
* [HTTP module for doing API requests](src/http.ts)
* [Brand colors and fonts](src/themes/collector.ts)


## Technologies used

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* ~~Glamorous~~ [emotion](https://emotion.sh/)


## Install

```
$ npm install --save collector-portal-framework
```


## How to use

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { CollectorPortalFramework } from 'collector-portal-framework';
import { YourApp } from './App';

ReactDOM.render(
  <CollectorPortalFramework>
    <YourApp />
  </CollectorPortalFramework>,
  document.getElementById('root')
);
```


## Available components

You can see a demo of the UI components [here](https://collector-bank.github.io/collector-portal-framework/). If you want your own local copy you can clone this repo and do `npm install` followed by `npm start` to start a local instance of [Storybook](https://storybook.js.org/).

### Generic components

| Component                                                         | Source                                                           |
| ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| [Alert](src/common/components/Alert/README.md)                    | [Source](src/common/components/Alert/index.tsx)                  |
| [Amount selector](src/common/components/AmountSelector/README.md) | [Source](src/common/components/AmountSelector/index.tsx)         |
| [Badge](src/common/components/Badge/README.md)                    | [Source](src/common/components/Badge/index.tsx)                  |
| [Button](src/common/components/Button/README.md)                  | [Source](src/common/components/Button/index.tsx)                 |
| [Button group](src/common/components/Button/README.md)            | [Source](src/common/components/Button/ButtonGroup.tsx)           |
| [Card](src/common/components/Card/README.md)                      | [Source](src/common/components/Card/index.tsx)                   |
| [Checkbox](src/common/components/Checkbox/README.md)              | [Source](src/common/components/Checkbox/index.tsx)               |
| [Checkbox group](src/common/components/Checkbox/README.md)        | [Source](src/common/components/Checkbox/CheckboxGroup.tsx)       |
| [Date picker](src/common/components/DatePicker/README.md)         | [Source](src/common/components/DatePicker/index.tsx)             |
| [Date picker group](src/common/components/DatePicker/README.md)   | [Source](src/common/components/DatePicker/index.tsx)             |
| [Input](src/common/components/Input/README.md)                    | [Source](src/common/components/Input/index.tsx)                  |
| [Paginator](src/common/components/Paginator/README.md)            | [Source](src/common/components/Paginator/index.tsx)              |
| [Radio button](src/common/components/RadioButton/README.md)       | [Source](src/common/components/RadioButton/index.tsx)            |
| [Radio button group](src/common/components/RadioButton/README.md) | [Source](src/common/components/RadioButton/RadioButtonGroup.tsx) |
| [Select](src/common/components/Select/README.md)                  | [Source](src/common/components/Select/index.tsx)                 |
| [Slider](src/common/components/Slider/README.md)                  | [Source](src/common/components/Slider/index.tsx)                 |
| [Spinner](src/common/components/Spinner/README.md)                | [Source](src/common/components/Spinner/index.tsx)                |
| [Tags Input](src/common/components/TagsInput/README.md)           | [Source](src/common/components/TagsInput/index.tsx)              |

### Typographic components

| Component | Source                                       |
| --------- | -------------------------------------------- |
| H1        | [Source](src/common/typography/H1.tsx)       |
| H2        | [Source](src/common/typography/H2.tsx)       |
| H3        | [Source](src/common/typography/H3.tsx)       |
| Text      | [Source](src/common/typography/Text.tsx)     |
| TextLink  | [Source](src/common/typography/TextLink.tsx) |

### "Portal specific" components

| Component     | Source                                       |
| ------------- | -------------------------------------------- |
| Togglable     | [Source](src/components/Togglable/index.tsx) |
| Fieldset      | [Source](src/components/Fieldset.tsx)        |
| Logo          | [Source](src/components/Logo.tsx)            |
| MainContainer | [Source](src/components/MainContainer.tsx)   |
| MainMenu      | [Source](src/components/MainMenu.tsx)        |
| Modal         | [Source](src/components/Modal.tsx)           |
| PageHeader    | [Source](src/components/PageHeader.tsx)      |
| Tabs          | [Source](src/components/Tabs.tsx)            |
| ValueList     | [Source](src/components/ValueList.tsx)       |


[npm-url]: https://npmjs.org/package/collector-portal-framework
[npm-image]: https://badge.fury.io/js/collector-portal-framework.svg
[build-url]: https://github.com/collector-bank/collector-portal-framework/actions

