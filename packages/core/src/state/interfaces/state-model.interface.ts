import { IBaseModel } from "~/base/interfaces/base-model.interface";

export interface IStateModel<T> extends IBaseModel {
  getState: () => T | undefined;
}
