import type { IBaseModel } from "~/base/interfaces/base-model.interface";
import type { TActionCallback, TActionFunction } from "~/action/action.types";

export interface IStateModel<T> extends IBaseModel {
  getState(): T | null;

  on(
    action: TActionFunction<T>,
    callback: TActionCallback<T>,
  ): this;

  setState(value: T | null): void;
}
