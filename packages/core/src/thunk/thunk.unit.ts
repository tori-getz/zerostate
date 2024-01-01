import type { TAsyncFunction } from "~/base/base.types";
import type { IThunkModelOptions } from "./interfaces/thunk-model-options.interface";
import type { TThunkFunction } from "./thunk.types";
import { ThunkModel } from "./thunk.model";

export const thunk = <T = unknown>(
  fn: TAsyncFunction,
  options: Partial<Omit<IThunkModelOptions, 'thunkFn'>> = {},
): TThunkFunction<typeof fn, T> => {
  const model = new ThunkModel<T>({
    thunkFn: fn,
    ...options
  });

  return Object.assign(
    (...args: Parameters<typeof fn>) => model.call(...args),
    {
      model,
      loading: model.loading,
      loaded: model.loaded,
      done: model.done,
    },
  );
};
