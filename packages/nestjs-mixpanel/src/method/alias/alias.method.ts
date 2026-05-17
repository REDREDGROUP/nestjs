import type mixpanel from 'mixpanel';
import type { AliasParams } from './alias.type';

export class MixpanelAliasMethods {
  constructor(private mixpanel: mixpanel.Mixpanel) {}

  alias(params: AliasParams) {
    this.mixpanel.alias(params.distinctId, params.alias, params.callback);
  }

  async aliasMany(params: AliasParams[]) {
    await Promise.all(params.map((item) => this.alias(item)));
  }
}
