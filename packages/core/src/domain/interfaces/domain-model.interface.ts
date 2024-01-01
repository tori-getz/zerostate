import { TActionUnit } from "~/action/action.types";
import type { IActionModel } from "~/action/interfaces/action-model.interface";
import type { IBaseModel } from "~/base/interfaces/base-model.interface";
import type { IStateModel } from "~/state/interfaces/state-model.interface";
import type { TStateUnit } from "~/state/state.types";

export interface IDomainModel extends IBaseModel {
  states: Set<IStateModel<any>>;
  actions: Set<IActionModel<any>>;

  createState: TStateUnit;
  createAction: TActionUnit;
}
