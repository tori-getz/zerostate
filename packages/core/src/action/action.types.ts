import type { IActionModel } from "./interfaces/action-model.interface";

export type TActionCallback<T, K> = (prevState: T, payload: K) => T;

export type TActionFunction<T> = ((value: T) => void) & { model: IActionModel<T> };

export type TActionUnit = <T>(name: string) => TActionFunction<T>;
