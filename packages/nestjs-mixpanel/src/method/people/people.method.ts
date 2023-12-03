import mixpanel from 'mixpanel';
import {
  AppendParams,
  ClearChargesParams,
  DeleteUserParams,
  IncrementParams,
  RemoveParams,
  SetOnceParams,
  SetParams,
  TrackChargeParams,
  UnionParams,
  UnsetParams,
} from './people.type';

export class MixpanelPeopleMethods {
  constructor(private mixpanel: mixpanel.Mixpanel) {}

  // People Operations
  set(params: SetParams) {
    if ('propertyName' in params) {
      this.mixpanel.people.set(params.distinctId, params.propertyName, params.value, params.modifiers, params.callback);
    } else {
      this.mixpanel.people.set(params.distinctId, params.properties, params.modifiers, params.callback);
    }
  }

  setMany(params: SetParams[]) {
    params.map((item) => this.set(item));
  }

  unset(params: UnsetParams) {
    this.mixpanel.people.unset(params.distinctId, params.propertyName, params.modifiers, params.callback);
  }

  unsetMany(params: UnsetParams[]) {
    params.map((item) => this.unset(item));
  }

  setOnce(params: SetOnceParams) {
    if ('propertyName' in params) {
      this.mixpanel.people.set_once(params.distinctId, params.propertyName, params.value, params.modifiers, params.callback);
    } else {
      this.mixpanel.people.set_once(params.distinctId, params.properties, params.modifiers, params.callback);
    }
  }

  setOnceMany(params: UnsetParams[]) {
    params.map((item) => this.unset(item));
  }

  increment(params: IncrementParams) {
    if ('properties' in params) {
      this.mixpanel.people.increment(params.distinctId, params.properties, params.modifiers, params.callback);
    } else if ('incrementBy' in params) {
      this.mixpanel.people.increment(params.distinctId, params.propertyName, params.incrementBy, params.modifiers, params.callback);
    }
  }

  incrementMany(params: IncrementParams[]) {
    params.map((item) => this.increment(item));
  }

  append(params: AppendParams) {
    if ('propertyName' in params) {
      this.mixpanel.people.append(params.distinctId, params.propertyName, params.value, params.modifiers, params.callback);
    } else {
      this.mixpanel.people.append(params.distinctId, params.properties, params.modifiers, params.callback);
    }
  }

  appendMany(params: AppendParams[]) {
    params.map((item) => this.append(item));
  }

  union(params: UnionParams) {
    this.mixpanel.people.union(params.distinctId, params.data, params.modifiers, params.callback);
  }

  unionMany(params: UnionParams[]) {
    params.map((item) => this.union(item));
  }

  remove(params: RemoveParams) {
    this.mixpanel.people.remove(params.distinctId, params.data, params.modifiers, params.callback);
  }

  removeMany(params: RemoveParams[]) {
    params.map((item) => this.remove(item));
  }

  trackCharge(params: TrackChargeParams) {
    if ('properties' in params) {
      this.mixpanel.people.track_charge(params.distinctId, params.amount, params.properties, params.modifiers, params.callback);
    } else {
      this.mixpanel.people.track_charge(params.distinctId, params.amount, undefined, params.modifiers, params.callback);
    }
  }

  trackChargeMany(params: TrackChargeParams[]) {
    params.map((item) => this.trackCharge(item));
  }

  clearCharges(params: ClearChargesParams) {
    this.mixpanel.people.clear_charges(params.distinctId, params.modifiers, params.callback);
  }

  clearChargesMany(params: ClearChargesParams[]) {
    params.map((item) => this.clearCharges(item));
  }

  deleteUser(params: DeleteUserParams) {
    this.mixpanel.people.delete_user(params.distinctId, params.modifiers, params.callback);
  }

  deleteUserMany(params: DeleteUserParams[]) {
    params.map((item) => this.deleteUser(item));
  }
}
