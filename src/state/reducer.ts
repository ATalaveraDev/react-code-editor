import { getTree, removeChildrenTabs } from '../helpers/files';
import { Tree } from '../helpers/tree';
import { ActionTypes } from '../models/actions';
import { AppAction, AppState, Tab } from '../models/main';

const appReducer = (state: AppState, action: AppAction) => {
  let newTree: Tree;
  let newTabs: Tab[];
  let newContent: string;

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
      newTabs = [];
      const nodeToBeRemoved = state.filesTree?.findById(action.payload);
      newTree = state.filesTree?.clone() as Tree;
      newTree.removeNode(action.payload);

      if (nodeToBeRemoved!.data.type === 'file') {
        newTabs = state.tabs.filter(tab => {
          return tab.id !== action.payload.data.id;
        });
      } else {
        newTabs = removeChildrenTabs(nodeToBeRemoved!, state.tabs);
      }

      if (newTabs.length && newTabs.findIndex(tab => tab.active) < 0) {
        newTabs[0].active = true;
      }

      return {
        ...state,
        tabs: newTabs,
        filesTree: newTree
      };
    case ActionTypes.MoveNode:
      newTree = state.filesTree?.clone() as Tree;
      newTree.moveNode(action.payload.nodeId, action.payload.newParentId);
      
      return {
        ...state,
        filesTree: newTree
      };
    case ActionTypes.EditNode:
      newTree = state.filesTree?.clone() as Tree;
      newTree.editNode(action.payload.nodeId, action.payload.name);

      return {
        ...state,
        filesTree: newTree
      };
    case ActionTypes.OpenFile:
      let alreadyInList = false;

      newTabs = state.tabs.map(tab => {
        if (tab.id === action.payload.id) {
          alreadyInList = true;
        }
        
        return {
          ...tab,
          active: tab.id === action.payload.id
        };
      });

      if (!alreadyInList) {
        newTabs = newTabs.concat({id: action.payload.id, text: action.payload.text, active: true});
      }

      return {
        ...state,
        content: action.payload.content,
        tabs: newTabs
      };
    case ActionTypes.VirtualizeAndOpenFile:
      newTabs = state.tabs.map(tab => {        
        return {
          ...tab,
          active: tab.id === action.payload.id
        };
      });
      newTabs = newTabs.concat({id: action.payload.id, text: action.payload.text, active: true});

      newTree = state.filesTree!.clone();
      newTree.findById(action.payload.id)!.data.virContent = action.payload.content;


      return {
        ...state,
        filesTree: newTree,
        content: action.payload.content,
        tabs: newTabs
      };
    case ActionTypes.CloseFile:
      newTabs = state.tabs.filter(tab => tab.id !== action.payload);
      if (newTabs.length && newTabs.findIndex(tab => tab.active) < 0) {
        newTabs[0].active = true;
      }

      newContent = newTabs.length ? state.filesTree!.findById(newTabs[0].id)!.data.virContent : '';

      return {
        ...state,
        content: newContent,
        tabs: newTabs
      };
    case ActionTypes.ActivateTab:
      newTabs = state.tabs.map(tab => {
        return {
          ...tab,
          active: tab.id === action.payload
        };
      });

      const content = state.filesTree?.findById(action.payload)?.data.virContent;
      
      return {
        ...state,
        content,
        tabs: newTabs
      };
    case ActionTypes.ModifyFileContent:
      const activeTabdId = state.tabs.filter(tab => tab.active)[0].id;
      newTree = state.filesTree!.clone();
      newTree.findById(activeTabdId)!.data.virContent = action.payload;

      return {
        ...state,
        filesTree: newTree
      };
  }

  return state;
};

export default appReducer;