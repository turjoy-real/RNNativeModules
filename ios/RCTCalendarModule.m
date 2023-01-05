//
//  RCTCalendarModule.m
//  RNNativeModules
//
//  Created by MTPC-216 on 05/01/23.
//

#import <Foundation/Foundation.h>
// RCTCalendarModule.m
#import "RCTCalendarModule.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule

// To export a module named RCTCalendarModule


RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title location:(NSString *)location callback: (RCTResponseSenderBlock)callback)
{
  NSInteger eventId = 32;
  callback(@[@(eventId)]);

 RCTLogInfo(@"Pretending to create an event %@ at %@", title, location);
}


- (NSDictionary *)constantsToExport
{
 return @{ @"DEFAULT_EVENT_NAME": @"New Event" };
}


RCT_EXPORT_MODULE(RCTCalendarModule)
@end

