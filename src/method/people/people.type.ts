import mixpanel from 'mixpanel';

export type SetParams =
  | { distinctId: string; properties: mixpanel.PropertyDict; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback }
  | { distinctId: string; propertyName: string; value: string | number; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback };

export type UnsetParams = { distinctId: string; propertyName: string | string[]; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback };

export type SetOnceParams =
  | { distinctId: string; properties: mixpanel.PropertyDict; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback }
  | { distinctId: string; propertyName: string; value: string; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback };

export type IncrementParams =
  | { distinctId: string; propertyName: string; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback }
  | { distinctId: string; propertyName: string; incrementBy: number; modifiers: mixpanel.Modifiers; callback?: mixpanel.Callback }
  | { distinctId: string; properties: mixpanel.NumberMap; modifiers: mixpanel.Modifiers; callback?: mixpanel.Callback };

export type AppendParams =
  | { distinctId: string; propertyName: string; value: any; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback }
  | { distinctId: string; properties: mixpanel.PropertyDict; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback };

export type UnionParams = { distinctId: string; data: mixpanel.UnionData; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback };

export type RemoveParams = { distinctId: string; data: mixpanel.RemoveData; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback };

export type TrackChargeParams =
  | { distinctId: string; amount: number | string; properties?: mixpanel.PropertyDict; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback }
  | { distinctId: string; amount: number | string; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback };

export type ClearChargesParams = { distinctId: string; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback };

export type DeleteUserParams = { distinctId: string; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback };
