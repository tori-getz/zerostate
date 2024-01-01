import type { IBaseModel } from "~/base/interfaces/base-model.interface";
import type { TActionCallback } from "~/action/action.types";

export interface IStateModel<T> extends IBaseModel {
  getState(): T | null;

  on(
    unit: any,
    callback: TActionCallback<T, T>,
  ): this;

  setState(value: T | null): void;
}
