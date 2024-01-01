import { useSyncExternalStore, useCallback } from 'react';
import type { StateModel } from '@zerostate/core';
// import { useSyncExternalStore } from 'react';

export const useState = <DataType>(
  $state: StateModel<DataType>,
): DataType | null => {
  const subscribe = useCallback(
    (fn: () => void) => $state.watch(fn),
    [$state]
  );

  const read = useCallback(
    () => $state.getState(),
    [$state]
  );

  const state = useSyncExternalStore(subscribe, read);

  return state;
}
