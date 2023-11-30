import mixpanel from 'mixpanel';

export type TrackParams =
  | { eventName: string; callback?: mixpanel.Callback; distinctId?: string }
  | { eventName: string; properties: mixpanel.PropertyDict; callback?: mixpanel.Callback; distinctId?: string };

export type TrackBatchParams =
  | { events: mixpanel.Event[]; options?: mixpanel.BatchOptions; callback?: mixpanel.BatchCallback }
  | { eventNames: string[]; options?: mixpanel.BatchOptions; callback?: mixpanel.BatchCallback };

export type ImportParams =
  | { eventName: string; time: Date | number; callback: mixpanel.Callback; distinctId?: string }
  | { eventName: string; time: Date | number; properties?: mixpanel.PropertyDict; callback?: mixpanel.Callback; distinctId?: string };

export type ImportBatchParams =
  | { eventNames: string[]; options?: mixpanel.BatchOptions; callback?: mixpanel.BatchCallback }
  | { events: mixpanel.Event[]; callback?: mixpanel.BatchCallback };
