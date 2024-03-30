import { AppAction } from './main';

export enum ActionTypes {
  UploadFiles = 'UPLOAD_FILES',
  ToggleFolder = 'TOGGLE_FOLDER',
  RemoveNode = 'REMOVE_NODE',
  MoveNode = 'MOVE_NODE',
  EditNode = 'EDIT_NODE'
}

export class Action {
  static uploadFiles = (files: any[]): AppAction => ({ type: ActionTypes.UploadFiles, payload: files });
  static toggleFolder = (folderId: string): AppAction => ({ type: ActionTypes.ToggleFolder, payload: folderId });
  static deleteTreeNode = (nodeId: string): AppAction => ({ type: ActionTypes.RemoveNode, payload: nodeId });
  static moveNode = (nodeId: string, newParentId: string): AppAction => ({ type: ActionTypes.MoveNode, payload: { nodeId, newParentId }});
  static editNode = (nodeId: string, name: string): AppAction => ({ type: ActionTypes.EditNode, payload: { nodeId, name }});
}