import mixpanel from 'mixpanel';

export type AliasParams = { distinctId: string; alias: string; callback?: mixpanel.Callback };
