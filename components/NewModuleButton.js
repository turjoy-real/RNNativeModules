import React from 'react';
import {Button} from 'react-native';
import CalendarModule from '../modules/CalendarModule';

const NewModuleButton = () => {
  const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants();
  const onPress = () => {
    // CalendarModule.createCalendarEvent('testName', 'testLocation');
    //   console.log('from module', DEFAULT_EVENT_NAME);
    CalendarModule.createCalendarEvent(
      'Party',
      'My House',
      (error, eventId) => {
        if (error) {
          console.error(`Error found! ${error}`);
        }
        console.log(`event id ${eventId} returned`);
      },
    );
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
