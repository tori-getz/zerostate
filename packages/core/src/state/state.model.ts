import { IStateModel } from "./interfaces/state-model.interface";
import { IStateOptions } from "./interfaces/state-options.interface";

export class StateModel<T = unknown> implements IStateModel<T> {
  public name: string;

  private value: T | undefined;

  public constructor({
    initialValue = undefined,
    name = StateModel.name,
  }: Partial<IStateOptions<T>>) {
    this.value = initialValue;
    this.name = name;
  }

  public getState(): T | undefined {
    return this.value;
  }
}
