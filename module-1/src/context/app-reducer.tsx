/* eslint-disable @typescript-eslint/no-explicit-any */
export enum AppActionKind {
  SET_VALUE = 'SET_VALUE',
  SET_DATA_FORM = 'SET_DATA_FORM',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
  FETCH_SLICE = 'FETCH_SLICE',
  UPDATE_STATUS = 'UPDATE_STATUS',
  UPDATE_GENDER = 'UPDATE_GENDER',
  UPDATE_SPECIES = 'UPDATE_SPECIES',
  FETCH_SINGLE_CARD = 'FETCH_SINGLE_CARD',
}

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case AppActionKind.SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case AppActionKind.UPDATE_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case AppActionKind.UPDATE_GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    case AppActionKind.UPDATE_SPECIES:
      return {
        ...state,
        species: action.payload,
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
    case AppActionKind.FETCH_SUCCESS:
      return {
        ...state,
        isPending: false,
        character: action.payload.results,
        error: false,
        totalCount: action.payload.info.count,
      };
    case AppActionKind.FETCH_SINGLE_CARD:
      return {
        ...state,
        card: action.payload,
        isPendingСard: false,
        characterCard: action.payload.results,
      };
    case AppActionKind.FETCH_ERROR:
      return {
        ...state,
        isPending: false,
        error: true,
        character: [],
      };
    case AppActionKind.FETCH_SLICE:
      return {
        ...state,
        isPending: false,
        character: action.payload.results.slice(0, 10),
        error: false,
      };
    default:
      return state;
  }
};

export default appReducer;
