import { thunk } from '@zerostate/core';
import axios from 'axios';

export const getGoogleThunk = thunk<string>(async (id: number) => {
  const { data } = await axios.get('https://google.ru/?id=' + id);

  return data;
});
