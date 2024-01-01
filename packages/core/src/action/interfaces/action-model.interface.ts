import type { IBaseModel } from "~/base/interfaces/base-model.interface";

export interface IActionModel<T> extends IBaseModel {
  call(value: T): void;
}
