import { getGoogleThunk } from './thunks';

getGoogleThunk.loading.watch(loading => {
  console.log('google thunk: loading', loading);
});

getGoogleThunk.loaded.model.watch(loaded => console.log('google thunk: loaded', loaded));

getGoogleThunk.done.watch(done => console.log('google thunk: done', done));

getGoogleThunk(15);
