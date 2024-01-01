import { BaseModel } from "~/base/base.model";
import type { IStateModel } from "./interfaces/state-model.interface";
import type { IStateOptions } from "./interfaces/state-options.interface";
import type { TActionCallback } from "~/action/action.types";
import { ActionModel } from "~/action/action.model";

export class StateModel<T = unknown> extends BaseModel implements IStateModel<T> {
  private value: T | null;

  public constructor({
    initialValue,
    name = StateModel.name,
  }: Partial<IStateOptions<T>>) {
    super({ name });
    
    this.value = initialValue ?? null;

    this.notifyWatchers(this.value);
  }

  public getState(): T | null {
    return this.value ?? null;
  }
  
  public setState(value: T): void {
    this.value = value;
    this.notifyWatchers(this.value);
  }

  public on(
    unit: BaseModel,
    callback: TActionCallback<T, T>,
  ) {
    if (unit instanceof ActionModel) {
      unit.addTask({ state: this, callback });
    }

    if ('model' in unit && unit.model instanceof ActionModel) {
      unit.model.addTask({ state: this, callback })
    }

    return this;
  }
}
