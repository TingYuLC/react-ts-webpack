import { combineReducers } from 'redux';
import theme from './theme/reducer';

const rootState = combineReducers({
  theme,
});

export type AppState = ReturnType<typeof rootState>;

export default rootState;
