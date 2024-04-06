import { AppAction } from './main';

export enum ActionTypes {
  UploadFiles = 'UPLOAD_FILES',
  ToggleFolder = 'TOGGLE_FOLDER',
  RemoveNode = 'REMOVE_NODE',
  MoveNode = 'MOVE_NODE',
  EditNode = 'EDIT_NODE',
  OpenFile = 'OPEN_FILE',
  VirtualizeAndOpenFile = 'VIRTUALIZE_OPEN_FILE',
  CloseFile = 'CLOSE_FILE',
  ActivateTab = 'ACTIVATE_TAB',
  ModifyFileContent = 'MODIFY_FILE_CONTENT'
}

export class Action {
  static uploadFiles = (files: any[]): AppAction => ({ type: ActionTypes.UploadFiles, payload: files });
  static toggleFolder = (folderId: string): AppAction => ({ type: ActionTypes.ToggleFolder, payload: folderId });
  static deleteTreeNode = (nodeId: string): AppAction => ({ type: ActionTypes.RemoveNode, payload: nodeId });
  static moveNode = (nodeId: string, newParentId: string): AppAction => ({ type: ActionTypes.MoveNode, payload: {nodeId, newParentId}});
  static editNode = (nodeId: string, name: string): AppAction => ({ type: ActionTypes.EditNode, payload: {nodeId, name}});
  static openFile = (id: string, text: string, content: any): AppAction => ({ type: ActionTypes.OpenFile, payload: {id, text, content} });
  static virtualizeOpenFile = (id: string, text: string, content: any): AppAction => ({ type: ActionTypes.VirtualizeAndOpenFile, payload: {id, text, content} });
  static closeFile = (nodeId: string): AppAction => ({ type: ActionTypes.CloseFile, payload: nodeId });
  static activateTab = (id: string): AppAction => ({ type: ActionTypes.ActivateTab, payload: id });
  static modifyFileContent = (content: string): AppAction => ({ type: ActionTypes.ModifyFileContent, payload: content });
}