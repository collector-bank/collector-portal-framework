# Collector Portal Framework

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

A collection of UI components and helper functions used in a couple of our internal and external web applications at [Collector Bank](https://www.collector.se/).
An interactive component library can be found on our [GitHub Pages site](https://collector-bank.github.io/collector-portal-framework/).


## This package contains

* UI components
* [Formatter functions](src/formatters.ts)
* [HTTP module for doing API requests](src/http.ts)
* [Brand colors and fonts](src/theme.ts)


## Technologies used

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Glamorous](https://glamorous.rocks/)


## Install

```
$ npm install --save collector-portal-framework
```


## How to use

Import Collectors theme from `collector-portal-framework/themes/collector` or create your own. Then import `ThemeProvider` and
`injectGlobalStyles` from `collector-portal-framework` and provide them the theme.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider, injectGlobalStyles } from 'collector-portal-framework';
import * as theme from 'collector-portal-framework/dist/themes/collector';
import { YourApp } from './App';

injectGlobalStyles(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <YourApp />
  </ThemeProvider>,
  document.getElementById('root')
);
```


## Available components

You can see a demo of the UI components by cloning this repo, doing `npm install` followed by `npm start` to start an instance of [React Storybook](https://storybook.js.org/).

### Generic components

| Component                                                         | Source                                                           |
|-------------------------------------------------------------------|------------------------------------------------------------------|
| [Alert](src/common/components/Alert/README.md)                    | [Source](src/common/components/Alert/index.tsx)                  |
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
| [Spinner](src/common/components/Spinner/README.md)                | [Source](src/common/components/Spinner/index.tsx)                |
| [Tags Input](src/common/components/TagsInput/README.md)           | [Source](src/common/components/TagsInput/index.tsx)              |

### Typographic components

| Component          | Source                                                           |
|--------------------|------------------------------------------------------------------|
| H1                 | [Source](src/common/typography/H1.tsx)                           |
| H2                 | [Source](src/common/typography/H2.tsx)                           |
| H3                 | [Source](src/common/typography/H3.tsx)                           |
| Text               | [Source](src/common/typography/Text.tsx)                         |
| TextLink           | [Source](src/common/typography/TextLink.tsx)                     |

### "Portal specific" components

| Component          | Source                                                           |
|--------------------|------------------------------------------------------------------|
| Togglable          | [Source](src/components/Togglable/index.tsx)                     |
| Fieldset           | [Source](src/components/Fieldset.tsx)                            |
| Logo               | [Source](src/components/Logo.tsx)                                |
| MainContainer      | [Source](src/components/MainContainer.tsx)                       |
| MainMenu           | [Source](src/components/MainMenu.tsx)                            |
| Modal              | [Source](src/components/Modal.tsx)                               |
| PageHeader         | [Source](src/components/PageHeader.tsx)                          |
| Tabs               | [Source](src/components/Tabs.tsx)                                |
| ValueList          | [Source](src/components/ValueList.tsx)                           |


[npm-url]: https://npmjs.org/package/collector-portal-framework
[npm-image]: https://badge.fury.io/js/collector-portal-framework.svg
[travis-image]: https://api.travis-ci.org/collector-bank/collector-portal-framework.svg
[travis-url]: https://travis-ci.org/collector-bank/collector-portal-framework
