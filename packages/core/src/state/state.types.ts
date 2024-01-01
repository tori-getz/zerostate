import type { IStateModel } from "./interfaces/state-model.interface";
import type { IStateOptions } from "./interfaces/state-options.interface";

export type TStateUnit = <T = unknown>(
  value: T,
  options: Partial<Omit<IStateOptions<T>, 'initialValue'>>,
) => IStateModel<T>;
