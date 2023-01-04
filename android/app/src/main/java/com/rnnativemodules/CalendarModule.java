package com.rnnativemodules;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

public class CalendarModule extends ReactContextBaseJavaModule {
    // add to CalendarModule.java
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Callback myFailureCallback, Callback mySuccessCallback) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);

        Integer eventId = 23;
        String error = "there is error";

        if (name != null && location != null) {
            mySuccessCallback.invoke(eventId);
        } else {
            myFailureCallback.invoke(error);
        }
    }


    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DEFAULT_EVENT_NAME", "New Event");
        return constants;
    }

    CalendarModule(ReactApplicationContext context) {
        super(context);
    }
}
