import { AppAction } from './main';

export enum ActionTypes {
  OpenFiles = 'OPEN_FILES'
}

export class Action {
  static openFiles = (files: any[]): AppAction => ({ type: ActionTypes.OpenFiles, payload: files });
}