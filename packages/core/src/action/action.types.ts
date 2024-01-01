import { ActionModel } from "./action.model";

export type TActionCallback<T> = (prevState: T, payload: T) => T;

export type TActionFunction<T> = ((value: T) => void) & { model: ActionModel<T> };

export type TActionUnit = <T>(name: string) => TActionFunction<T>;
