import mixpanel from 'mixpanel';
import { TrackParams, TrackBatchParams, ImportParams, ImportBatchParams } from './event.type';

export class MixpanelEventMethods {
  constructor(private mixpanel: mixpanel.Mixpanel) {}

  // Event Tracking
  track(params: TrackParams) {
    const { distinctId } = params;
    if ('properties' in params) {
      this.mixpanel.track(params.eventName, { ...params.properties, distinctId }, params.callback);
    } else {
      this.mixpanel.track(params.eventName, { distinctId }, params.callback);
    }
  }

  trackBatch(params: TrackBatchParams) {
    if ('eventNames' in params) {
      this.mixpanel.track_batch(params.eventNames, params.options, params.callback);
    } else {
      this.mixpanel.track_batch(params.events, params.options, params.callback);
    }
  }

  import(params: ImportParams) {
    const { distinctId } = params;
    if ('properties' in params) {
      this.mixpanel.import(params.eventName, params.time, { ...params.properties, distinctId }, params.callback);
    } else {
      this.mixpanel.import(params.eventName, params.time, { distinctId }, params.callback);
    }
  }

  importBatch(params: ImportBatchParams) {
    if ('eventNames' in params) {
      this.mixpanel.import_batch(params.eventNames, params.options, params.callback);
    } else {
      this.mixpanel.import_batch(params.events, params.callback);
    }
  }
}
