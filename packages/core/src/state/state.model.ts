import { BaseModel } from "~/base/base.model";
import { IStateModel } from "./interfaces/state-model.interface";
import { IStateOptions } from "./interfaces/state-options.interface";

export class StateModel<T = unknown> extends BaseModel implements IStateModel<T> {
  private value: T | undefined;

  public constructor({
    initialValue = undefined,
    name = StateModel.name,
  }: Partial<IStateOptions<T>>) {
    super({ name });
    
    this.value = initialValue;
  }

  public getState(): T | undefined {
    return this.value;
  }
}
