import mixpanel from 'mixpanel';

export class MixpanelPeopleMethods {
  constructor(private mixpanel: mixpanel.Mixpanel) {}

  // People Operations
  setPersonProperties(distinctId: string, properties: mixpanel.PropertyDict, modifiers?: mixpanel.Modifiers, callback?: mixpanel.Callback) {
    this.mixpanel.people.set(distinctId, properties, modifiers, callback);
  }

  unsetPersonProperties(distinctId: string, propertyName: string | string[], modifiers?: mixpanel.Modifiers, callback?: mixpanel.Callback) {
    this.mixpanel.people.unset(distinctId, propertyName, modifiers, callback);
  }

  setPersonPropertiesOnce(distinctId: string, properties: mixpanel.PropertyDict, modifiers?: mixpanel.Modifiers, callback?: mixpanel.Callback) {
    this.mixpanel.people.set_once(distinctId, properties, modifiers, callback);
  }

  incrementPersonProperty(distinctId: string, properties: mixpanel.NumberMap, modifiers?: mixpanel.Modifiers, callback?: mixpanel.Callback) {
    this.mixpanel.people.increment(distinctId, properties, modifiers, callback);
  }

  appendPersonProperty(distinctId: string, properties: mixpanel.PropertyDict, modifiers?: mixpanel.Modifiers, callback?: mixpanel.Callback) {
    this.mixpanel.people.append(distinctId, properties, modifiers, callback);
  }

  unionPersonProperty(distinctId: string, data: mixpanel.UnionData, modifiers?: mixpanel.Modifiers, callback?: mixpanel.Callback) {
    this.mixpanel.people.union(distinctId, data, modifiers, callback);
  }

  removePersonProperty(distinctId: string, data: mixpanel.RemoveData, modifiers?: mixpanel.Modifiers, callback?: mixpanel.Callback) {
    this.mixpanel.people.remove(distinctId, data, modifiers, callback);
  }

  trackCharge(
    distinctId: string,
    amount: number | string,
    properties?: mixpanel.PropertyDict,
    modifiers?: mixpanel.Modifiers,
    callback?: mixpanel.Callback,
  ) {
    this.mixpanel.people.track_charge(distinctId, amount, properties, modifiers, callback);
  }

  clearCharges(distinctId: string, modifiers?: mixpanel.Modifiers, callback?: mixpanel.Callback) {
    this.mixpanel.people.clear_charges(distinctId, modifiers, callback);
  }

  deleteUser(distinctId: string, modifiers?: mixpanel.Modifiers, callback?: mixpanel.Callback) {
    this.mixpanel.people.delete_user(distinctId, modifiers, callback);
  }
}
