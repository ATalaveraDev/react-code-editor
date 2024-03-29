import { AppAction } from './main';

export enum ActionTypes {
  UploadFiles = 'UPLOAD_FILES',
  ToggleFolder = 'TOGGLE_FOLDER',
  RemoveNode = 'REMOVE_NODE'
}

export class Action {
  static uploadFiles = (files: any[]): AppAction => ({ type: ActionTypes.UploadFiles, payload: files });
  static toggleFolder = (folderId: string): AppAction => ({ type: ActionTypes.ToggleFolder, payload: folderId });
  static deleteTreeNode = (nodeId: string): AppAction => ({ type: ActionTypes.RemoveNode, payload: nodeId });
}