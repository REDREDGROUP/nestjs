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

  unset(params: UnsetParams) {
    this.mixpanel.people.unset(params.distinctId, params.propertyName, params.modifiers, params.callback);
  }

  setOnce(params: SetOnceParams) {
    if ('propertyName' in params) {
      this.mixpanel.people.set_once(params.distinctId, params.propertyName, params.value, params.modifiers, params.callback);
    } else {
      this.mixpanel.people.set_once(params.distinctId, params.properties, params.modifiers, params.callback);
    }
  }

  increment(params: IncrementParams) {
    if ('properties' in params) {
      this.mixpanel.people.increment(params.distinctId, params.properties, params.modifiers, params.callback);
    } else if ('incrementBy' in params) {
      this.mixpanel.people.increment(params.distinctId, params.propertyName, params.incrementBy, params.modifiers, params.callback);
    }
  }

  append(params: AppendParams) {
    if ('propertyName' in params) {
      this.mixpanel.people.append(params.distinctId, params.propertyName, params.value, params.modifiers, params.callback);
    } else {
      this.mixpanel.people.append(params.distinctId, params.properties, params.modifiers, params.callback);
    }
  }

  union(params: UnionParams) {
    this.mixpanel.people.union(params.distinctId, params.data, params.modifiers, params.callback);
  }

  remove(params: RemoveParams) {
    this.mixpanel.people.remove(params.distinctId, params.data, params.modifiers, params.callback);
  }

  trackCharge(params: TrackChargeParams) {
    if ('properties' in params) {
      this.mixpanel.people.track_charge(params.distinctId, params.amount, params.properties, params.modifiers, params.callback);
    } else {
      this.mixpanel.people.track_charge(params.distinctId, params.amount, undefined, params.modifiers, params.callback);
    }
  }

  clearCharges(params: ClearChargesParams) {
    this.mixpanel.people.clear_charges(params.distinctId, params.modifiers, params.callback);
  }

  deleteUser(params: DeleteUserParams) {
    this.mixpanel.people.delete_user(params.distinctId, params.modifiers, params.callback);
  }
}
