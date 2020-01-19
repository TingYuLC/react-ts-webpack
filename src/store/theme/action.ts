import UPDATE_THEME, { ThemeState } from './types';

const updateTheme = (payload: ThemeState) => ({
  type: UPDATE_THEME,
  payload,
});

export default updateTheme;
