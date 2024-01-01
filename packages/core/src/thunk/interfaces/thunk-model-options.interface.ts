import type { IBaseModelOptions } from "~/base/interfaces/base-model-options.interface";
import type { TAsyncFunction } from "~/base/base.types";

export interface IThunkModelOptions extends IBaseModelOptions {
  thunkFn: TAsyncFunction;
}
