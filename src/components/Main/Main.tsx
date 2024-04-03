import { useAppStateContext } from '../../state/context';
import ContentEditor from '../ContentEditor/ContentEditor';
import FeaturesOverview from '../FeaturesOverview/FeaturesOverview';
import Tabs from '../Tabs/Tabs';

import './Main.css';

const Main = () => {
  const state = useAppStateContext();

  return state.tabs.length ? <> 
      <Tabs />
      <ContentEditor />
    </> : <FeaturesOverview />;
};

export default Main;