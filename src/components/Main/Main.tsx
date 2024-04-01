import { useAppStateContext } from '../../state/context';
import ContentEditor from '../ContentEditor/ContentEditor';
import Tabs from '../Tabs/Tabs';

import './Main.css';

const Main = () => {
  const state = useAppStateContext();

  return state.tabs.length ? <> 
      <Tabs />
      <ContentEditor />
    </> : null;
};

export default Main;