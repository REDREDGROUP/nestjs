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

  async trackMany(params: TrackParams[]) {
    await Promise.all(
      params.map((item) => {
        const { distinctId } = item;
        if ('properties' in item) {
          this.mixpanel.track(item.eventName, { ...item.properties, distinctId }, item.callback);
        } else {
          this.mixpanel.track(item.eventName, { distinctId }, item.callback);
        }
      }),
    );
  }

  trackBatch(params: TrackBatchParams) {
    if ('eventNames' in params) {
      this.mixpanel.track_batch(params.eventNames, params.options, params.callback);
    } else {
      this.mixpanel.track_batch(params.events, params.options, params.callback);
    }
  }

  async trackBatchMany(params: TrackBatchParams[]) {
    await Promise.all(
      params.map((item) => {
        if ('eventNames' in item) {
          this.mixpanel.track_batch(item.eventNames, item.options, item.callback);
        } else {
          this.mixpanel.track_batch(item.events, item.options, item.callback);
        }
      }),
    );
  }

  import(params: ImportParams) {
    const { distinctId } = params;
    if ('properties' in params) {
      this.mixpanel.import(params.eventName, params.time, { ...params.properties, distinctId }, params.callback);
    } else {
      this.mixpanel.import(params.eventName, params.time, { distinctId }, params.callback);
    }
  }

  async importMany(params: ImportParams[]) {
    await Promise.all(
      params.map((item) => {
        const { distinctId } = item;
        if ('properties' in item) {
          this.mixpanel.import(item.eventName, item.time, { ...item.properties, distinctId }, item.callback);
        } else {
          this.mixpanel.import(item.eventName, item.time, { distinctId }, item.callback);
        }
      }),
    );
  }

  importBatch(params: ImportBatchParams) {
    if ('eventNames' in params) {
      this.mixpanel.import_batch(params.eventNames, params.options, params.callback);
    } else {
      this.mixpanel.import_batch(params.events, params.callback);
    }
  }

  async importBatchMany(params: ImportBatchParams[]) {
    await Promise.all(
      params.map((item) => {
        if ('eventNames' in item) {
          this.mixpanel.import_batch(item.eventNames, item.options, item.callback);
        } else {
          this.mixpanel.import_batch(item.events, item.callback);
        }
      }),
    );
  }
}
