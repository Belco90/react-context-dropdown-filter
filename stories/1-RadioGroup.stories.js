import React from 'react';

import RadioGroupUsingCloneChildren from 'components/RadioGroupUsingCloneChildren';
import RadioGroupUsingClassComponent from 'components/RadioGroupUsingClassComponent';
import RadioGroupUsingHooks from 'components/RadioGroupUsingHooks';

export default {
  title: 'RadioGroup',
};

const makeRadioGroup = Component => () => {
  const [value, setValue] = React.useState('a');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Component selectedValue={value} name="RadioGroup" onChange={handleChange}>
      <Component.Choice value="a">option A</Component.Choice>
      <Component.Choice value="b">option B</Component.Choice>
      <Component.Choice value="c">option C</Component.Choice>
    </Component>
  );
};
export const usingCloneChildren = makeRadioGroup(RadioGroupUsingCloneChildren);
export const usingClassComponent = makeRadioGroup(
  RadioGroupUsingClassComponent
);
export const usingHooks = makeRadioGroup(RadioGroupUsingHooks);
