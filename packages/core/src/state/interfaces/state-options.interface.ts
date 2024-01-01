import type { IBaseModelOptions } from "~/base/interfaces/base-model-options.interface";

export interface IStateOptions<T> extends IBaseModelOptions {
  initialValue: T;
}
