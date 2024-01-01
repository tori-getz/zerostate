import type { IBaseModel } from "~/base/interfaces/base-model.interface";
import type { IStateModel } from "~/state/interfaces/state-model.interface";
import type { TLoadedAction } from "../thunk.types";
import { TActionFunction } from "~/action/action.types";

export interface IThunkModel<T> extends IBaseModel {
  loading: IStateModel<boolean>;
  loaded: TActionFunction<TLoadedAction<T>>;
  done: IStateModel<boolean>;
}
