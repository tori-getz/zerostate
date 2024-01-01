import type { IBaseModel } from "~/base/interfaces/base-model.interface";
import type { IActionTask } from "./action-task.interface";

export interface IActionModel<T> extends IBaseModel {
  call(value: T): void;
  addTask(task: IActionTask<T>): void;
}
