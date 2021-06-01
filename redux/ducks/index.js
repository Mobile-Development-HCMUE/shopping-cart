import { combineReducers } from "redux";

const initialState = {
    theme: {
        tab: "",
        headerRight: "",
        headerLeft: "",
        profile: "",
    },
};

const themeOptions = {
    default: {
        tab: "",
        headerRight: "",
        headerLeft: "",
        profile: "",
    },
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
