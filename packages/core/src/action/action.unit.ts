import { ActionModel } from "./action.model"
import { TActionFunction } from "./action.types";

export const action = <T>(name: string): TActionFunction<T> => {
  const model = new ActionModel<T>({ name });

  return Object.assign(
    (value: T) => model.call(value),
    { model },
  );
};
