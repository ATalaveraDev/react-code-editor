import { AppAction } from './main';

export enum ActionTypes {
  UploadFiles = 'UPLOAD_FILES',
  ToggleFolder = 'TOGGLE_FOLDER'
}

export class Action {
  static uploadFiles = (files: any[]): AppAction => ({ type: ActionTypes.UploadFiles, payload: files });
  static toggleFolder = (folderId: string): AppAction => ({ type: ActionTypes.ToggleFolder, payload: folderId }) 
}