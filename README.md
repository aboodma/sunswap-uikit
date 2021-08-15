# 🧂 SaltSwap UIkit

[![Version](https://img.shields.io/npm/v/@saltswap/uikit)](https://www.npmjs.com/package/@saltswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@saltswap/uikit)](https://www.npmjs.com/package/@saltswap/uikit)

SaltSwap UIkit is a set of React components and hooks used to build pages on SaltSwap's apps.

It also contains a theme file for dark and light mode.

## Install

`yarn add @saltswap/uikit`

## npm

https://www.npmjs.com/package/@saltswap/uikit

## Setup

### Theme

Before using SaltSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@saltswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@saltswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://saltswap.github.io/saltswap-uikit/)
