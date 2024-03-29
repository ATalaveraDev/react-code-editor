import { getTree } from '../helpers/files';
import { ActionTypes } from '../models/actions';
import { AppAction, AppState } from '../models/main';

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case ActionTypes.UploadFiles:
      return {
        ...state,
        filesTree: getTree(action.payload)
      };
    case ActionTypes.ToggleFolder:
      const newTree = state.filesTree?.clone();
      const node = newTree?.findById(action.payload);
      node!.data.opened = !node?.data.opened;

      return {
        ...state,
        filesTree: newTree
      };
  }

  return state;
};

export default appReducer;