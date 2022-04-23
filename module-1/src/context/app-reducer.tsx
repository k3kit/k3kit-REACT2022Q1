/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export enum AppActionKind {
  SET_VALUE = 'SET_VALUE',
  SET_DATA_FORM = 'SET_DATA_FORM',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case AppActionKind.SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case AppActionKind.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case AppActionKind.SET_DATA_FORM:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default appReducer;
