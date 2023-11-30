import mixpanel from 'mixpanel';

export class MixpanelEventMethods {
  constructor(private mixpanel: mixpanel.Mixpanel) {}

  // Event Tracking
  track(eventName: string, properties?: mixpanel.PropertyDict, callback?: mixpanel.Callback) {
    this.mixpanel.track(eventName, properties, callback);
  }

  trackBatch(events: mixpanel.Event[], options?: mixpanel.BatchOptions, callback?: mixpanel.BatchCallback) {
    this.mixpanel.track_batch(events, options, callback);
  }

  // Event Importing
  importEvent(eventName: string, time: Date | number, properties?: mixpanel.PropertyDict, callback?: mixpanel.Callback) {
    this.mixpanel.import(eventName, time, properties, callback);
  }

  importBatch(events: mixpanel.Event[], callback?: mixpanel.BatchCallback) {
    this.mixpanel.import_batch(events, callback);
  }

  // Alias Handling
  alias(distinctId: string, alias: string, callback?: mixpanel.Callback) {
    this.mixpanel.alias(distinctId, alias, callback);
  }
}
