import type { IBaseModelOptions } from "./interfaces/base-model-options.interface";
import type { IBaseModel } from "./interfaces/base-model.interface";

export class BaseModel implements IBaseModel {
  public name: string;

  public constructor({
    name
  }: IBaseModelOptions) {
    this.name = name;
  }
}
