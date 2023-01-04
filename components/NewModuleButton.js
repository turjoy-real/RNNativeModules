import React from 'react';
import {Button} from 'react-native';
import CalendarModule from '../modules/CalendarModule';

const NewModuleButton = () => {
  const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants();

  const onSubmit = async () => {
    try {
      const eventId = await CalendarModule.createCalendarEvent(
        'Party',
        'My House',
      );
      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
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
