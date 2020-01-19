const UPDATE_THEME = 'UPDATE_THEME';

export interface ThemeState {
  color?: string;
  img?: string;
}

export interface UpdateThemeAction {
  type?: typeof UPDATE_THEME;
  payload: ThemeState;
}

export default UPDATE_THEME;
