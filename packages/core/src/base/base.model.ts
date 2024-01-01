import type { IBaseModelOptions } from "./interfaces/base-model-options.interface";
import type { IBaseModel } from "./interfaces/base-model.interface";
import type { TBaseWatcher } from './base.types';

export class BaseModel implements IBaseModel {
  public name: string;

  private watchers: Set<TBaseWatcher> = new Set();

  public constructor({
    name
  }: IBaseModelOptions) {
    this.name = name;
  }

  public watch(fn: TBaseWatcher): Function {
    this.watchers.add(fn);

    return () => {
      this.unwatch(fn);
    }
  }

  public unwatch(fn: TBaseWatcher): void {
    this.watchers.delete(fn);  
  }

  public notifyWatchers<T = unknown>(value: T): void {
    for (const watcher of this.watchers) {
      watcher(value);
    }
  }
}
