import { Dispatch, createContext, useContext, useReducer } from 'react';
import appReducer from './reducer';
import { AppAction, AppState } from '../models/main';

const initialState: AppState = {
  filesTree: null,
  tabs: [],
  content: ''
};

export const AppStateContext = createContext<AppState | null>(null);
export const AppDispatchContext = createContext<Dispatch<AppAction> | null>(null);

export const useAppStateContext = () => {
  const state = useContext(AppStateContext);

  if (!state) {
    throw new Error('AppStateContext should be used within <AppStateContext.Provider>');
  }

  return state;
};

export const useAppDispatchContext = () => {
  const dispatch = useContext(AppDispatchContext);

  if (!dispatch) {
    throw new Error('AppDispatchContext should be used within <AppDispatchContext.Provider>');
  }

  return dispatch;
};

export const AppContextProvider = ({children}: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};