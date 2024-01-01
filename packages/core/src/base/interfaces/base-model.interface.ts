import type { TBaseWatcher } from "../base.types";

export interface IBaseModel {
  name: string;
  watch(fn: TBaseWatcher): () => void;
  unwatch(fn: TBaseWatcher): void;
  notifyWatchers<T = unknown>(value: T): void;
}
