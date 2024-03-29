import { Dispatch } from 'react';
import { render } from '@testing-library/react';

import { AppAction, AppState } from './models/main';
import { AppDispatchContext, AppStateContext } from './state/context';

const customRender = (ui: React.ReactNode, {providerProps}: {providerProps: {state: AppState, dispatch: Dispatch<AppAction>}}) => {
  return render(
    <AppStateContext.Provider value={providerProps.state}>
      <AppDispatchContext.Provider value={providerProps.dispatch}>
        {ui}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
};

export default customRender;