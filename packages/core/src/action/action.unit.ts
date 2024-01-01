import { ActionModel } from "./action.model"

export const action = <T = undefined>(name: string) => new ActionModel<T>({ name });
