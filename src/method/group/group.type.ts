import mixpanel from 'mixpanel';

export type SetGroupParams =
  | { groupKey: string; groupId: string; properties: mixpanel.PropertyDict; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback }
  | { groupKey: string; groupId: string; propertyName: string; value: string | number; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback };

export type UnsetGroupParams = {
  groupKey: string;
  groupId: string;
  propertyName: string | string[];
  modifiers?: mixpanel.Modifiers;
  callback?: mixpanel.Callback;
};

export type SetOnceGroupParams =
  | { groupKey: string; groupId: string; properties: mixpanel.PropertyDict; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback }
  | { groupKey: string; groupId: string; propertyName: string; value: string; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback };

export type UnionGroupParams = {
  groupKey: string;
  groupId: string;
  data: mixpanel.UnionData;
  modifiers?: mixpanel.Modifiers;
  callback?: mixpanel.Callback;
};

export type RemoveGroupParams = {
  groupKey: string;
  groupId: string;
  data: mixpanel.RemoveData;
  modifiers?: mixpanel.Modifiers;
  callback?: mixpanel.Callback;
};

export type DeleteGroupParams = { groupKey: string; groupId: string; modifiers?: mixpanel.Modifiers; callback?: mixpanel.Callback };
