import { getTree } from '../helpers/files';
import { Tree } from '../helpers/tree';
import { ActionTypes } from '../models/actions';
import { AppAction, AppState } from '../models/main';

const appReducer = (state: AppState, action: AppAction) => {
  let newTree: Tree;

  switch (action.type) {
    case ActionTypes.UploadFiles:
      return {
        ...state,
        filesTree: getTree(action.payload)
      };
    case ActionTypes.ToggleFolder:
      newTree = state.filesTree?.clone() as Tree;
      const node = newTree?.findById(action.payload);
      node!.data.opened = !node?.data.opened;

      return {
        ...state,
        filesTree: newTree
      };
    case ActionTypes.RemoveNode:
      newTree = state.filesTree?.clone() as Tree;
      newTree.removeNode(action.payload);

      return {
        ...state,
        filesTree: newTree
      };
  }

  return state;
};

export default appReducer;