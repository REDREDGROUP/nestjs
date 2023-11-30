import mixpanel from 'mixpanel';

export class MixpanelGroupMethods {
  constructor(private mixpanel: mixpanel.Mixpanel) {}

  // Group Operations
  setGroupProperties(
    groupKey: string,
    groupId: string,
    properties: mixpanel.PropertyDict,
    modifiers?: mixpanel.Modifiers,
    callback?: mixpanel.Callback,
  ) {
    this.mixpanel.groups.set(groupKey, groupId, properties, modifiers, callback);
  }

  unsetGroupProperties(
    groupKey: string,
    groupId: string,
    propertyName: string | string[],
    modifiers?: mixpanel.Modifiers,
    callback?: mixpanel.Callback,
  ) {
    this.mixpanel.groups.unset(groupKey, groupId, propertyName, modifiers, callback);
  }

  setGroupPropertiesOnce(
    groupKey: string,
    groupId: string,
    properties: mixpanel.PropertyDict,
    modifiers?: mixpanel.Modifiers,
    callback?: mixpanel.Callback,
  ) {
    this.mixpanel.groups.set_once(groupKey, groupId, properties, modifiers, callback);
  }

  unionGroupProperty(groupKey: string, groupId: string, data: mixpanel.UnionData, modifiers?: mixpanel.Modifiers, callback?: mixpanel.Callback) {
    this.mixpanel.groups.union(groupKey, groupId, data, modifiers, callback);
  }

  removeGroupProperty(groupKey: string, groupId: string, data: mixpanel.RemoveData, modifiers?: mixpanel.Modifiers, callback?: mixpanel.Callback) {
    this.mixpanel.groups.remove(groupKey, groupId, data, modifiers, callback);
  }

  deleteGroup(groupKey: string, groupId: string, modifiers?: mixpanel.Modifiers, callback?: mixpanel.Callback) {
    this.mixpanel.groups.delete_group(groupKey, groupId, modifiers, callback);
  }
}
