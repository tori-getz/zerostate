export interface IStateModel<T> {
  name: string;
  getState: () => T | undefined;
}
