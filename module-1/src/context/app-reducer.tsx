/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export enum AppActionKind {
  SET_VALUE = 'SET_VALUE',
}

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case AppActionKind.SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
