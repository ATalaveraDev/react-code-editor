import { Tree } from '../helpers/tree';

export type AppAction = {
  type: string;
  payload?: any;
};

export type AppState = {
  filesTree: Tree | null;
};