import React from 'react';
import { Input } from '@ui-kitten/components';

export function CustomInput({ placeholder, setInputValue, defaultValue = '' }) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <Input
      style={{ marginBottom: 10, width: '90%' }}
      placeholder={placeholder}
      value={value}
      onChangeText={(nextValue) => {
        setValue(nextValue);
        setInputValue(nextValue);
      }}
    />
  );
}
