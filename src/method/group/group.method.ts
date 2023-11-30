import mixpanel from 'mixpanel';
import { SetGroupParams, UnsetGroupParams, SetOnceGroupParams, UnionGroupParams, RemoveGroupParams, DeleteGroupParams } from './group.type';

export class MixpanelGroupMethods {
  constructor(private mixpanel: mixpanel.Mixpanel) {}

  setGroup(params: SetGroupParams) {
    if ('propertyName' in params) {
      this.mixpanel.groups.set(params.groupKey, params.groupId, params.propertyName, params.value, params.modifiers, params.callback);
    } else {
      this.mixpanel.groups.set(params.groupKey, params.groupId, params.properties, params.modifiers, params.callback);
    }
  }

  unsetGroup(params: UnsetGroupParams) {
    this.mixpanel.groups.unset(params.groupKey, params.groupId, params.propertyName, params.modifiers, params.callback);
  }

  setOnceGroup(params: SetOnceGroupParams) {
    if ('propertyName' in params) {
      this.mixpanel.groups.set_once(params.groupKey, params.groupId, params.propertyName, params.value, params.modifiers, params.callback);
    } else {
      this.mixpanel.groups.set_once(params.groupKey, params.groupId, params.properties, params.modifiers, params.callback);
    }
  }

  unionGroup(params: UnionGroupParams) {
    this.mixpanel.groups.union(params.groupKey, params.groupId, params.data, params.modifiers, params.callback);
  }

  removeGroup(params: RemoveGroupParams) {
    this.mixpanel.groups.remove(params.groupKey, params.groupId, params.data, params.modifiers, params.callback);
  }

  deleteGroup(params: DeleteGroupParams) {
    this.mixpanel.groups.delete_group(params.groupKey, params.groupId, params.modifiers, params.callback);
  }
}
