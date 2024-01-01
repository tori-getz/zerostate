import { BaseModel } from "~/base/base.model";
import type { IActionModel } from "./interfaces/action-model.interface";
import type { IActionModelOptions } from "./interfaces/action-model-options.interface";
import type { IActionTask } from "./interfaces/action-task.interface";

export class ActionModel<T> extends BaseModel implements IActionModel<T> {
  private tasks: Set<IActionTask<T>> = new Set();

  public constructor({ name }: IActionModelOptions) {
    super({ name });
  }

  public call(value: T): void {
    this.notifyWatchers(value);
    this.runTasks(value);
  }

  private runTasks(value: T): void {
    for (const { state, callback } of this.tasks) {
      const prevState = state.getState();
      const nextState = callback(prevState as T, value);
      state.setState(nextState);
    }
  }

  public addTask(task: IActionTask<T>): void {
    this.tasks.add(task)
  }
}
