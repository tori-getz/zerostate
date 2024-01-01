import { BaseModel } from "~/base/base.model";
import type { IThunkModel } from "./interfaces/thunk-model.interface";
import type { IThunkModelOptions } from "./interfaces/thunk-model-options.interface";
import { StateModel } from "~/state/state.model";
import type { IStateModel } from "~/state/interfaces/state-model.interface";
import type { TLoadedAction } from "./thunk.types";
import type { TAsyncFunction } from "~/base/base.types";
import { TActionFunction } from "~/action/action.types";
import { action } from "..";

export class ThunkModel<T> extends BaseModel implements IThunkModel<T> {
  private thunkFn: TAsyncFunction;

  public loading: IStateModel<boolean>;
  public done: IStateModel<boolean>;

  public loaded: TActionFunction<TLoadedAction<T>>;

  public constructor({
    name = ThunkModel.name,
    thunkFn = async () => {},
  }: Partial<IThunkModelOptions>) {
    super({ name });
    
    this.thunkFn = thunkFn;

    this.loading = new StateModel({
      initialValue: false,
      name: `${name}_loading`
    });

    this.done = new StateModel({
      initialValue: true,
      name: `${name}_failed`
    })

    // this.loaded = action<TLoadedAction<T>>(`${name}_loaded`)

    this.loaded = action<TLoadedAction<T>>(`${name}_loaded`);
  }

  public async call(...args: Parameters<typeof this.thunkFn>) {
    try {
      this.loading.setState(true);

      const data = await this.thunkFn(...args);

      this.done.setState(true);
      this.loaded({ ok: true, data })
    } catch(error: any) {
      this.done.setState(false);
      this.loaded({ ok: false, error: error as string });
    } finally {
      this.loading.setState(false);
    }
  }
}
