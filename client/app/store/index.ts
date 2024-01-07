import { Context, MakeStore, createWrapper } from 'next-redux-wrapper'
import { RootState, rootReducer } from './reducers';
import { Store, createStore } from 'redux';
// create a makeStore function
const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});