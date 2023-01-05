import React from 'react';
import {Button} from 'react-native';
import CalendarModule from '../modules/CalendarModule';

const NewModuleButton = () => {
  const onSubmit = () => {
    CalendarModule.createCalendarEvent('Party', '04-12-2020', eventId => {
      console.log(`Created a new event with id ${eventId}`);
    });
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onSubmit}
    />
  );
};

export default NewModuleButton;
