import { getTree } from '../helpers/files';
import { ActionTypes } from '../models/actions';
import { AppAction, AppState } from '../models/main';

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case ActionTypes.OpenFiles:
      return {
        ...state,
        filesTree: getTree(action.payload)
      };
  }

  return state;
};

export default appReducer;