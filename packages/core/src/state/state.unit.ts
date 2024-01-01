import { StateModel } from "./state.model";
import type { TStateUnit } from "./state.types";

export const state: TStateUnit = (value, options) => {
  return new StateModel({
    initialValue: value,
    ...options
  });
};
