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
    },
    green: {
        TAB: "#2E8364",
    },
};

const initialState = {
    theme: { ...themeOptions.default },
};

export const change_theme = (titleTheme) => ({
    type: CHANGE_THEME,
    theme: themeReducer[titleTheme],
});

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case change_theme:
            return { ...state, theme: action.theme };
        default:
            return state;
    }
};

export default combineReducers({
    theme: themeReducer,
});
