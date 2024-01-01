import { BaseModel } from "~/base/base.model";
import type { IStateModel } from "./interfaces/state-model.interface";
import type { IStateOptions } from "./interfaces/state-options.interface";
import type { TActionCallback, TActionFunction } from "~/action/action.types";

export class StateModel<T = unknown> extends BaseModel implements IStateModel<T> {
  private value: T | null;

  public constructor({
    initialValue,
    name = StateModel.name,
  }: Partial<IStateOptions<T>>) {
    super({ name });
    
    this.value = initialValue ?? null;
  }

  public getState(): T | null {
    return this.value;
  }
  
  public setState(value: T): void {
    this.value = value;
    this.notifyWatchers(this.value);
  }

  public on(
    action: TActionFunction<T>,
    callback: TActionCallback<T>,
  ) {
    action.model.addTask({ state: this, callback });
    return this;
  }
}
