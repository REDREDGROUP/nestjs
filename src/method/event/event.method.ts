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
    await Promise.all(params.map((item) => this.track(item)));
  }

  trackBatch(params: TrackBatchParams) {
    if ('eventNames' in params) {
      this.mixpanel.track_batch(params.eventNames, params.options, params.callback);
    } else {
      this.mixpanel.track_batch(params.events, params.options, params.callback);
    }
  }

  async trackBatchMany(params: TrackBatchParams[]) {
    await Promise.all(params.map((item) => this.trackBatch(item)));
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
    await Promise.all(params.map((item) => this.import(item)));
  }

  importBatch(params: ImportBatchParams) {
    if ('eventNames' in params) {
      this.mixpanel.import_batch(params.eventNames, params.options, params.callback);
    } else {
      this.mixpanel.import_batch(params.events, params.callback);
    }
  }

  async importBatchMany(params: ImportBatchParams[]) {
    await Promise.all(params.map((item) => this.importBatch(item)));
  }
}
