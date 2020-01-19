import UPDATE_THEME, { ThemeState, UpdateThemeAction } from './types';

const themeData: ThemeState = JSON.parse(window.localStorage.getItem('theme'));
const color = (themeData && themeData.color) || '#1E90FF';

const initialState: ThemeState = {
  color,
};

const updateTheme = (state = initialState, action: UpdateThemeAction): ThemeState => {
  switch (action.type) {
    case UPDATE_THEME: {
      const newState: ThemeState = {
        ...state,
        ...action.payload,
      };
      window.localStorage.setItem('theme', JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default updateTheme;
