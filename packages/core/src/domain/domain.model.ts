import { BaseModel } from "~/base/base.model";
import type { IDomainModel } from "./interfaces/domain-model.interface";
import type { IDomainModelOptions } from "./interfaces/domain-model-options.interface";
import type { IStateModel } from "~/state/interfaces/state-model.interface";
import type { IActionModel } from "~/action/interfaces/action-model.interface";
import { state } from "~/state";
import { action } from "~/action";
import { TActionFunction } from "~/action/action.types";

export class DomainModel extends BaseModel implements IDomainModel {
  public states: Set<IStateModel<any>> = new Set();
  public actions: Set<IActionModel<any>> = new Set();

  public constructor({ name }: IDomainModelOptions) {
    super({ name });
  }

  public createState = <T>(...args: Parameters<typeof state>): IStateModel<T> => {
    const [value, options] = args;
    const newState = state<T>(value as T, options);

    this.states.add(newState);

    this.notifyWatchers(newState);

    return newState;
  }

  public createAction = <T>(name: string): TActionFunction<T> => {
    const newAction = action<T>(name);

    this.actions.add(newAction.model);

    this.notifyWatchers(newAction);

    return newAction;
  }
}
