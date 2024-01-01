import { IStateOptions } from "./interfaces/state-options.interface";
import { StateModel } from "./state.model";

export const state = <T = unknown>(
  value: T,
  options: Partial<Omit<IStateOptions<T>, 'initialValue'>> = {},
): StateModel<T> => {
  return new StateModel({
    initialValue: value,
    ...options
  });
};
