import { useAppStateContext } from '../../state/context';
import ContentEditor from '../ContentEditor/ContentEditor';
import FeaturesOverview from '../FeaturesOverview/FeaturesOverview';
import Tabs from '../Tabs/Tabs';

import './Main.css';

const Main = () => {
  const state = useAppStateContext();
  const showFeatures = !state.tabs.length;

  return <> 
      <Tabs data={state.tabs} />
      <ContentEditor content={state.content} />
      <FeaturesOverview visible={showFeatures} />
    </>;
};

export default Main;