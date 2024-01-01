import { BaseModel } from "~/base/base.model";
import { IActionModel } from "./interfaces/action-model.interface";
import { IActionModelOptions } from "./interfaces/action-model-options.interface";

export class ActionModel<T = undefined> extends BaseModel implements IActionModel<T> {
  public constructor({ name }: IActionModelOptions) {
    super({ name });
  }

  public call(value: T): void {
    console.log('run value:', value);
  }
}
