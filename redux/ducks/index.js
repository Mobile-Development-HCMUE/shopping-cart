import { combineReducers } from "redux";

export const themeOptions = {
  default: {
    TAB: "#6155a6",
    TAB_ACTIVE: "#fff",
    HEADER_RIGHT: "#9ab3f5",
    HEADER_LEFT: "#7579e7",
    TOP_PROFILE: "#D3c0f9",
    BOTTOM_PROFILE: "#fff",
    HEADER_TITLE: "#fff",
    BACK_BUTTON: "#fff",
    DRAWER: "#307e",
    DRAWER_PROFILE: "#307e",
    TEXT_DRAWER_OPTION: "#d8d8d8",
  },
  orange: {
    TAB: "#F23005",
    TAB_ACTIVE: "#fff",
    HEADER_RIGHT: "#F2B705",
    HEADER_LEFT: "#F24405",
    TOP_PROFILE: "#f7e7e1",
    BOTTOM_PROFILE: "#fff8ef",
    HEADER_TITLE: "#fff",
    BACK_BUTTON: "#fff",
    DRAWER: "#1E3D59",
    DRAWER_PROFILE: "#FF6E40",
    TEXT_DRAWER_OPTION: "#FFF",
  },
  green: {
    TAB: "#1e6f5c",
    TAB_ACTIVE: "#fff",
    HEADER_RIGHT: "#29bb89",
    HEADER_LEFT: "#289672",
    TOP_PROFILE: "#dfeeea",
    BOTTOM_PROFILE: "#FFF",
    HEADER_TITLE: "#fff",
    BACK_BUTTON: "#fff",
    DRAWER: "#064420",
    DRAWER_PROFILE: "#f55c47",
    TEXT_DRAWER_OPTION: "#FFF",
  },
  blue: {
    TAB: "#03256c",
    TAB_ACTIVE: "#fff",
    HEADER_RIGHT: "#3d84b8",
    HEADER_LEFT: "#344fa1",
    TOP_PROFILE: "#a7c5eb",
    BOTTOM_PROFILE: "#f4f9f9",
    HEADER_TITLE: "#fff",
    BACK_BUTTON: "#fff",
    DRAWER: "#150e56",
    DRAWER_PROFILE: "#f55c47",
    TEXT_DRAWER_OPTION: "#FFF",
  },
  black: {
    TAB: "#864000",
    TAB_ACTIVE: "#fff",
    HEADER_RIGHT: "#e89f71",
    HEADER_LEFT: "#ac4b1c",
    TOP_PROFILE: "#edcfa9",
    BOTTOM_PROFILE: "#fff",
    HEADER_TITLE: "#fff",
    BACK_BUTTON: "#fff",
    DRAWER: "#290001",
    DRAWER_PROFILE: "#87431d",
    TEXT_DRAWER_OPTION: "#FFF",
  },
};

export const themeColorButtonSetting = {
  light: [
    {
      COLOR1: "#4badea",
      COLOR2: "#E1F3FE",
      COLOR3: "#F6FBFE",
    },
    {
      COLOR1: "#36d6d4",
      COLOR2: "#E4F7F6",
      COLOR3: "#F6FCFC",
    },
    {
      COLOR1: "#ff4669",
      COLOR2: "#FFE3EF",
      COLOR3: "#FFF6FA",
    },

    {
      COLOR1: "#F25C05",
      COLOR2: "#fce9de",
      COLOR3: "#fffaf7",
    },
    {
      COLOR1: "#b739d3",
      COLOR2: "#fae5ff",
      COLOR3: "#fcf7fc",
    },
    {
      COLOR1: "#4badea",
      COLOR2: "#E1F3FE",
      COLOR3: "#F6FBFE",
    },
    {
      COLOR1: "#A178EE",
      COLOR2: "#F1EBFD",
      COLOR3: "#FAF9FE",
    },
    {
      COLOR1: "#6882ed",
      COLOR2: "#d9e0ff",
      COLOR3: "#F7F8FD",
    },
    {
      COLOR1: "#025959",
      COLOR2: "#d9f9f9",
      COLOR3: "#f7feff",
    },
  ],
};

const initialState = {
  theme: { ...themeOptions.default, ...themeColorButtonSetting.light },
};

export const CHANGE_THEME = "CHANGE_THEME";

export const change_theme = (titleTheme) => ({
  type: CHANGE_THEME,
  theme: { ...themeOptions[titleTheme], ...themeColorButtonSetting.light },
});

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: action.theme };
    default:
      return state;
  }
};

export const reducers = combineReducers({
  theme: themeReducer,
});
