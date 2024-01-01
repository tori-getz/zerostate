import type { IStateModel } from "~/state/interfaces/state-model.interface";
import { TActionCallback } from "../action.types";

export interface IActionTask<T> {
  state: IStateModel<T>;
  callback: TActionCallback<T, T>;
}
