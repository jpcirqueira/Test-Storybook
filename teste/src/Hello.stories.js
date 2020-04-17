import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hello } from "./Hello";

storiesOf("Hello", module)
  .add("with text name", () => <Hello name="." />)
  .add("with emoji name", () => <Hello name="😀 😎 👍 💯" />);