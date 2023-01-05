import React from 'react';
import {Button} from 'react-native';
import CalendarModule from '../modules/CalendarModule';

const NewModuleButton = () => {
  const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants();

  const onPress = () => {
    console.log(DEFAULT_EVENT_NAME);
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;
