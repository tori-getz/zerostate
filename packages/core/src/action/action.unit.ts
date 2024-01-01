import { ActionModel } from "./action.model"
import type { TActionUnit } from "./action.types";

export const action: TActionUnit = <T>(name: string) => {
  const model = new ActionModel<T>({ name });

  return Object.assign(
    (value: T) => model.call(value),
    { model },
  );
};
