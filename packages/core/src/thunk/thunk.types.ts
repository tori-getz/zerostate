import type { TAsyncFunction } from "~/base/base.types";
import type { IThunkModel } from "./interfaces/thunk-model.interface";

export type TLoadedAction<T> = { ok: true, data: T } | { ok: false, error: string };

export type TThunkFn = (...args: any) => Promise<any>;

export type TThunkFunction<T = TAsyncFunction, K = unknown> = T & {
  model: IThunkModel<K>;
  loading: IThunkModel<K>['loading'];
  loaded: IThunkModel<K>['loaded'];
  done: IThunkModel<K>['done'];
};
